import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";

import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { getCurrentUser } from "@/lib/actions/auth.auction";
import {
  getInterviewsByUserId,
  getLatestInterviews,
} from "@/lib/actions/general.action";

const page = async () => {
  const user = await getCurrentUser();

  const [userInterviews, latestInterviews] = await Promise.all([
    await getInterviewsByUserId(user?.id!),
    await getLatestInterviews({ userId: user?.id! }),
  ]);

  const hasPastInterviews = userInterviews?.length > 0;
  const hasUpcomingInterviews = latestInterviews?.length > 0;

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#171532] to-[#08090D] px-16 py-12 max-sm:px-6">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-black/50" />

        <div className="relative flex items-center justify-between gap-8">
          <div className="flex flex-col gap-6 max-w-xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-sm backdrop-blur-sm border border-white/10 w-fit">
              <Sparkles className="h-4 w-4 text-primary-200" />
              <span className="text-primary-100">
                AI-Powered Interview Practice
              </span>
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
              Master Your Next Interview with AI
            </h1>

            <p className="text-lg text-white/70">
              Practice with our AI interviewer, get instant feedback, and
              improve your interview skills in real-time.
            </p>

            <Button
              asChild
              className="group w-fit bg-primary-200 hover:bg-primary-200/90 text-black"
            >
              <Link
                href="/interview"
                className="inline-flex items-center gap-2"
              >
                Start an Interview
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>

          <div className="relative max-sm:hidden">
            <div className="absolute -inset-4 bg-primary-200/20 blur-3xl" />
            <Image
              src="/robot.png"
              alt="robot"
              width={400}
              height={400}
              className="relative drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Your Interviews Section */}
      <section className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
            Your Interviews
          </h2>
          {hasPastInterviews && (
            <Link
              href="/profile"
              className="text-primary-200 hover:text-primary-200/80 text-sm"
            >
              View All →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasPastInterviews ? (
            userInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-white/70">
                You haven&apos;t taken any interviews yet
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Available Interviews Section */}
      <section className="mt-16 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold bg-gradient-to-br from-white to-white/70 bg-clip-text text-transparent">
            Available Interviews
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hasUpcomingInterviews ? (
            latestInterviews?.map((interview) => (
              <InterviewCard {...interview} key={interview.id} />
            ))
          ) : (
            <div className="col-span-full flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 p-8">
              <p className="text-white/70">There are no new interviews yet</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default page;
