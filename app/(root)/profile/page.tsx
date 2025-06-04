import React from "react";
import { getCurrentUser } from "@/lib/actions/auth.auction";
import {
  getInterviewsByUserId,
  getFeedbackByInterviewId,
} from "@/lib/actions/general.action";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import InterviewAttempts from "@/components/InterviewAttempts";

const ProfilePage = async () => {
  const user = await getCurrentUser();
  const allInterviews = user?.id ? await getInterviewsByUserId(user.id) : null;

  // Get feedback for all interviews
  const interviewsWithFeedback = await Promise.all(
    (allInterviews || []).map(async (interview) => {
      const feedback = user?.id
        ? await getFeedbackByInterviewId({
            interviewId: interview.id,
            userId: user.id,
          })
        : null;
      return { ...interview, hasFeedback: !!feedback };
    })
  );

  // Filter to show only taken interviews (ones that have feedback)
  const takenInterviews = interviewsWithFeedback.filter(
    (interview) => interview.hasFeedback
  );

  if (!user) return null;

  return (
    <div className="flex flex-col gap-8">
      <div className="flex items-center">
        <Button variant="ghost" size="icon" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="h-5 w-5" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold">Profile</h1>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative h-24 w-24 rounded-full bg-primary/10">
          <span className="flex h-full w-full items-center justify-center text-4xl">
            {user.name?.[0] || "U"}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{user.name}</h2>
          <p className="text-muted-foreground">{user.email}</p>
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">Your Interview History</h3>
        <div className="flex flex-col gap-6">
          {takenInterviews && takenInterviews.length > 0 ? (
            takenInterviews.map((interview) => (
              <InterviewAttempts
                key={interview.id}
                {...interview}
                userId={user.id}
              />
            ))
          ) : (
            <p>You haven&apos;t completed any interviews yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
