"use server";

import { google } from "@ai-sdk/google";
import { generateObject } from "ai";

import { feedbackSchema } from "@/constants";
import { db } from "@/firebase/admin";
import { logFeedbackOperation } from "@/lib/utils";
import {
  Interview,
  GetLatestInterviewsParams,
  CreateFeedbackParams,
  GetFeedbackByInterviewIdParams,
  Feedback,
} from "@/types";

export async function getInterviewsByUserId(
  userId: string
): Promise<Interview[] | null> {
  const interviews = await db
    .collection("interviews")
    .where("userId", "==", userId)
    .orderBy("createdAt", "desc")
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getLatestInterviews(
  params: GetLatestInterviewsParams
): Promise<Interview[] | null> {
  const { userId, limit = 20 } = params;

  const interviews = await db
    .collection("interviews")
    .orderBy("createdAt", "desc")
    .where("finalized", "==", true)
    .where("userId", "!=", userId)
    .limit(limit)
    .get();

  return interviews.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  })) as Interview[];
}

export async function getInterviewById(id: string): Promise<Interview | null> {
  const interview = await db.collection("interviews").doc(id).get();

  return interview.data() as Interview | null;
}

export async function createFeedback(params: CreateFeedbackParams) {
  const { interviewId, userId, transcript, feedbackId } = params;

  try {
    logFeedbackOperation("start", { interviewId, userId });

    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `- ${sentence.role}: ${sentence.content}\n`
      )
      .join("");

    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
        You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
        Transcript:
        ${formattedTranscript}

        Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
        - **Communication Skills**: Clarity, articulation, structured responses.
        - **Technical Knowledge**: Understanding of key concepts for the role.
        - **Problem-Solving**: Ability to analyze problems and propose solutions.
        - **Cultural & Role Fit**: Alignment with company values and job role.
        - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
        `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
    });

    const currentTimestamp = new Date().toISOString();
    const feedback = {
      interviewId,
      userId,
      attemptTimestamp: currentTimestamp,
      totalScore: object.totalScore,
      categoryScores: object.categoryScores,
      strengths: object.strengths,
      areasForImprovement: object.areasForImprovement,
      finalAssessment: object.finalAssessment,
      createdAt: currentTimestamp,
    };

    let feedbackRef;

    if (feedbackId) {
      feedbackRef = db.collection("feedback").doc(feedbackId);
      logFeedbackOperation("update", { feedbackId, ...feedback });
    } else {
      feedbackRef = db.collection("feedback").doc();
      logFeedbackOperation("create", {
        newFeedbackId: feedbackRef.id,
        ...feedback,
      });
    }

    await feedbackRef.set(feedback);

    return { success: true, feedbackId: feedbackRef.id };
  } catch (error) {
    console.error("Error saving feedback:", error);
    logFeedbackOperation("error", { error, interviewId, userId });
    return { success: false };
  }
}

export async function getFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  const { interviewId, userId } = params;

  logFeedbackOperation("fetch-start", { interviewId, userId });

  try {
    const querySnapshot = await db
      .collection("feedback")
      .where("interviewId", "==", interviewId)
      .where("userId", "==", userId)
      .orderBy("attemptTimestamp", "desc")
      .limit(1)
      .get();

    if (querySnapshot.empty) {
      logFeedbackOperation("fetch-empty", { interviewId, userId });
      return null;
    }

    const feedbackDoc = querySnapshot.docs[0];
    const feedback = { id: feedbackDoc.id, ...feedbackDoc.data() } as Feedback;

    logFeedbackOperation("fetch-success", {
      feedbackId: feedback.id,
      attemptTimestamp: feedback.attemptTimestamp,
    });

    return feedback;
  } catch (error) {
    console.error("Error fetching feedback:", error);
    logFeedbackOperation("fetch-error", { error, interviewId, userId });
    return null;
  }
}

export async function getAllFeedbacksByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback[] | null> {
  const { interviewId, userId } = params;

  try {
    const querySnapshot = await db
      .collection("feedback")
      .where("interviewId", "==", interviewId)
      .where("userId", "==", userId)
      .orderBy("attemptTimestamp", "desc")
      .get();

    const feedbacks = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Feedback[];

    return feedbacks;
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return null;
  }
}
