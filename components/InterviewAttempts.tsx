import React from "react";
import dayjs from "dayjs";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { getRandomInterviewCover } from "@/lib/utils";
import DisplayTechIcons from "./DisplayTechIcons";
import type { Feedback, InterviewCardProps } from "@/types/index";
import { getAllFeedbacksByInterviewId } from "@/lib/actions/general.action";

const InterviewAttempts = async ({
  id,
  userId,
  role,
  type,
  techstack,
}: InterviewCardProps) => {
  // Get all feedbacks for this interview
  const feedbacks =
    (await getAllFeedbacksByInterviewId({
      interviewId: id!,
      userId: userId!,
    })) || [];
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  return (
    <div className="card-border w-full">
      <div className="card-interview">
        <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-light-600">
          <p className="badge-text">{normalizedType}</p>
        </div>

        <div className="flex items-center gap-4">
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={90}
            height={90}
            className="rounded-full object-cover size-[90px]"
          />
          <div>
            <h3 className="capitalize">{role} Interview</h3>
            <DisplayTechIcons techStack={techstack} />
          </div>
        </div>

        <div className="mt-8">
          <h4 className="text-lg font-semibold mb-4">Previous Attempts</h4>
          <div className="space-y-4">
            {feedbacks.map((feedback: Feedback, index: number) => (
              <div
                key={feedback.id}
                className="flex items-center justify-between p-4 rounded-lg bg-dark-200/50"
              >
                <div className="flex items-center gap-4">
                  <div className="flex flex-col">
                    <p className="text-sm text-muted-foreground">
                      Attempt {feedbacks.length - index}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {dayjs(feedback.attemptTimestamp).format(
                        "MMM D, YYYY • h:mm A"
                      )}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Image src="/star.svg" alt="star" width={22} height={22} />
                    <p>{feedback.totalScore}/100</p>
                  </div>
                </div>
                <Button className="btn-primary">
                  <Link
                    href={`/interview/${id}/feedback?attempt=${feedback.id}`}
                  >
                    View Feedback
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-end">
          <Button className="btn-primary">
            <Link href={`/interview/${id}`}>Retake Interview</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewAttempts;
