import React from "react";
import dayjs from "dayjs";
import { getRandomInterviewCover } from "@/lib/utils";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import DisplayTechIcons from "./DisplayTechIcons";
import { getFeedbackByInterviewId } from "@/lib/actions/general.action";
import { InterviewCardProps } from "@/types";
import { Calendar, Star, ArrowRight } from "lucide-react";

const InterviewCard = async ({
  id,
  userId,
  role,
  type,
  techstack,
  createdAt,
}: InterviewCardProps) => {
  const feedback =
    userId && id
      ? await getFeedbackByInterviewId({ interviewId: id, userId })
      : null;
  const normalizedType = /mix/gi.test(type) ? "Mixed" : type;

  // Use attempt timestamp if available, otherwise use feedback creation time or interview creation time
  const displayDate =
    feedback?.attemptTimestamp ||
    feedback?.createdAt ||
    createdAt ||
    Date.now();
  const formattedDate = dayjs(displayDate).format("MMM D, YYYY");
  const formattedTime = dayjs(displayDate).format("h:mm A");

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-dark-200/50 to-dark-200/30 backdrop-blur-sm border border-dark-200/50 hover:border-primary-200/50 transition-all duration-300 w-[360px] max-sm:w-full">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-200/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Header Section with Logo and Type Badge */}
      <div className="relative p-6 pb-0 flex justify-between items-start">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-200/20 to-transparent rounded-full blur-md transform group-hover:scale-110 transition-transform duration-300" />
          <Image
            src={getRandomInterviewCover()}
            alt="cover"
            width={64}
            height={64}
            className="relative rounded-full object-cover z-10 group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        {/* Type Badge */}
        <div className="px-3 py-1.5 rounded-full bg-dark-200/80 backdrop-blur-sm border border-dark-200/50">
          <p className="text-xs font-medium text-primary-100">
            {normalizedType}
          </p>
        </div>
      </div>

      <div className="p-6 space-y-6">
        {/* Content */}
        <div>
          <h3 className="text-xl font-semibold capitalize mb-2 text-light-100 group-hover:text-primary-100 transition-colors duration-300">
            {role} Interview
          </h3>
          <div className="flex items-center gap-4 text-sm text-light-100/70">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>
                {formattedDate} • {formattedTime}
              </span>
            </div>
            {feedback && (
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-primary-200" />
                <span className="font-medium">{feedback.totalScore}/100</span>
              </div>
            )}
          </div>
        </div>

        {/* Assessment */}
        <p className="line-clamp-2 text-sm text-light-100/80 min-h-[40px]">
          {feedback?.finalAssessment ||
            "You haven't taken the interview yet. Take it now to improve your skills."}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-dark-200/50">
          <DisplayTechIcons techStack={techstack} />
          <Button
            className="btn-primary group/btn flex items-center gap-2 hover:gap-3 transition-all duration-300"
            asChild
          >
            <Link
              href={feedback ? `/interview/${id}/feedback` : `/interview/${id}`}
            >
              <span>{feedback ? "View Feedback" : "Start Interview"}</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default InterviewCard;
