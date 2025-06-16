import React from "react";
import { Link, useParams } from "react-router-dom";
import { IoCheckmark } from "react-icons/io5";

import levelIcon from "@/assets/learning/levelIcon.svg";
import durationIcon from "@/assets/learning/durationicon.svg";
import worktypeicon from "@/assets/learning/worktypeicon.svg";
import { DetailHero } from "@/components/learning/DetailHero";
import { learningData } from "@/data/learning";
import { IoIosArrowRoundForward } from "react-icons/io";

interface LevelSectionProps {
  level: string;
  duration?: string;
  workTypes: string[];
}

const LevelSection: React.FC<LevelSectionProps> = ({
  level,
  duration,
  workTypes
}) => (
  <div className="flex flex-col md:flex-row justify-between my-8 gap-2">
    <div className="flex items-center gap-4">
      <img src={levelIcon} alt="icon" className="object-cover h-12" />
      <p>{level} Level</p>
    </div>
    {duration && (
      <div className="flex items-center gap-4">
        <img src={durationIcon} alt="icon" className="object-cover h-12" />
        <p>{duration}</p>
      </div>
    )}
    <div className="flex items-center gap-4">
      <img src={worktypeicon} alt="icon" className="object-cover h-12" />
      <div>
        {workTypes.map((worktype, id) => (
          <p key={id}>{worktype}</p>
        ))}
      </div>
    </div>
  </div>
);

interface ContentSectionProps {
  content?: string;
  price?: { newPrice: string; oldPrice: string };
  curriculum?: string[];
}

const ContentSection: React.FC<ContentSectionProps> = ({
  content,
  price,
  curriculum
}) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-12">
    <section className="flex-1 leading-[200%]">
      <p>{content}</p>
      <Link
        to="#"
        className="text-primary underline hover:bg-primary/10 hover:p-2 duration-200 transition-all"
      >
        Download
      </Link>
    </section>
    <section className="flex-1">
      {price && (
        <div className="flex gap-4">
          <p className="text-2xl md:text-3xl font-bold">{price.newPrice}</p>
          <p className="text-xl md:text-2xl line-through text-accent-grey">
            {price.oldPrice}
          </p>
        </div>
      )}
      {curriculum && (
        <div className="mt-4">
          <h2 className="font-semibold text-accent-grey text-xl md:text-2xl mb-2">
            Curriculum
          </h2>
          {curriculum.map((item, id) => (
            <div className="flex gap-2 mt-1" key={id}>
              <IoCheckmark />
              <span>{item}</span>
            </div>
          ))}
        </div>
      )}
      <Link
        to="#"
        className="text-primary flex items-center gap-2 w-fit mt-4 underline hover:bg-primary/10 hover:p-2 duration-200 transition-all"
      >
        <span>Register</span>
        <IoIosArrowRoundForward />
      </Link>
    </section>
  </div>
);

export const LearningTopicDetails: React.FC = () => {
  const { topic } = useParams();
  const learningTopic = learningData.find((data) => data.path === topic);
  const detail = learningTopic?.detail;

  return (
    <section>
      <DetailHero
        body={learningTopic?.body ?? ""}
        title={learningTopic?.title ?? ""}
        image={detail?.coverImage ?? ""}
      />

      <main className="px-4 md:px-24 w-full py-8 md:py-12">
        {/* Top Overview Section */}
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <div className="flex gap-4">
            <img src={levelIcon} alt="icon" className="object-cover h-12" />
            <div>
              {detail?.levels.map((level, id) => (
                <p key={id}>{level} - Level</p>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <img src={durationIcon} alt="icon" className="object-cover h-12" />
            <div>
              {detail?.duration.map((duration, id) => (
                <p key={id}>{duration}</p>
              ))}
            </div>
          </div>
          <div className="flex gap-4">
            <img src={worktypeicon} alt="icon" className="object-cover h-12" />
            <div>
              {detail?.workType.map((worktype, id) => (
                <p key={id}>{worktype}</p>
              ))}
            </div>
          </div>
        </div>

        {/* Beginner */}
        <div className="mt-8 md:mt-12">
          <h1 className="text-2xl md:text-3xl mb-4">Course Overview</h1>
          <ContentSection
            content={detail?.beginnerContent}
            price={detail?.beginnerPrice}
            curriculum={detail?.beginnerCurriculum}
          />
        </div>

        {/* Intermediate */}
        <div className="mt-8 md:mt-12">
          <LevelSection
            level="Intermediate"
            duration="11 weeks"
            workTypes={detail?.workType ?? []}
          />
          <ContentSection
            content={detail?.intermediateContent}
            price={detail?.intermediatePrice}
            curriculum={detail?.intermediateCurriculum}
          />
        </div>

        {/* Advanced */}
        <div className="mt-8 md:mt-12">
          <LevelSection
            level="Advanced"
            duration="20 weeks"
            workTypes={detail?.workType ?? []}
          />
          <ContentSection
            content={detail?.advancedContent}
            price={detail?.advancedPrice}
            curriculum={detail?.advancedCurriculum}
          />
        </div>
      </main>
    </section>
  );
};
