import { incubation } from "@/data/incubation";
import { Skills } from "../Skills";

export const SkillsContent = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <p className="md:text-lg text-accent-grey md:max-w-4xl md:mx-auto text-center">
        ATIRC’s Incubation Program empowers startups to transform innovative
        ideas into thriving businesses. We provide mentorship, resources,
        funding access, and industry partnerships to help entrepreneurs grow.
        With a focus on emerging technologies like AI, Blockchain, and
        CleanTech, our program accelerates business development and fosters
        sustainable, impactful solutions for the future.
      </p>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-8">
        {incubation.map((skill) => (
          <Skills key={skill.image} path="/application/incubation" {...skill} />
        ))}
      </div>
    </div>
  );
};
