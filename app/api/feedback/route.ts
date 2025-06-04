import { db } from "@/firebase/admin";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const interviewId = searchParams.get("interviewId");
  const userId = searchParams.get("userId");

  if (!interviewId || !userId) {
    return Response.json(
      { error: "Missing required parameters" },
      { status: 400 }
    );
  }

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
    }));

    return Response.json(feedbacks);
  } catch (error) {
    console.error("Error fetching feedbacks:", error);
    return Response.json(
      { error: "Failed to fetch feedbacks" },
      { status: 500 }
    );
  }
}
