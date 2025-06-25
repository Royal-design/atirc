import { research } from "@/data/research";
import { Skills } from "../Skills";

export const Content = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <p className="md:text-lg text-accent-grey md:max-w-4xl md:mx-auto text-center">
        ATIRC’s Research Program fosters groundbreaking innovations across
        diverse fields like AI, Biotech, Clean Tech, and Quantum Computing. By
        encouraging collaboration between researchers, students, and industry
        experts, we aim to tackle real-world challenges, advance knowledge, and
        drive technological progress that will shape Africa’s future and
        contribute globally to scientific advancements.
      </p>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-8">
        {research.map((skill) => (
          <Skills key={skill.id} path="/application/research" {...skill} />
        ))}
      </div>
    </div>
  );
};
