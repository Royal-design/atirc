import { learningData } from "@/data/learning";
import { Skills } from "../Skills";

export const Content = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <p className="md:text-lg text-accent-grey md:max-w-4xl md:mx-auto text-center">
        ATIRC’s IT training programs offer hands-on learning across diverse
        technology domains, including Cloud Computing, AI, Cybersecurity, Data
        Science, and more. Our curriculum is designed to equip students and
        professionals with practical skills, preparing them to excel in today’s
        fast-evolving tech industry and tackle real-world challenges confidently
      </p>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-8">
        {learningData.map((skill) => (
          <Skills key={skill.id} {...skill} />
        ))}
      </div>
    </div>
  );
};
