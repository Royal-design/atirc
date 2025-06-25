import { Skills } from "../Skills";
import { consulting } from "@/data/consulting";

export const Content = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <p className="md:text-lg text-accent-grey md:max-w-4xl md:mx-auto text-center">
        ATIRC’s IT consulting services offer strategic guidance to organizations
        looking to optimize their technological infrastructure. Consultants
        assist in IT strategy development, systems integration, cybersecurity,
        and cloud computing solutions. The goal is to help businesses enhance
        their operational efficiencies and stay ahead of technological trends
        through customized, innovative solutions.
      </p>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-8">
        {consulting.map((skill) => (
          <Skills
            key={skill.id}
            path="/application/consulting"
            type="contact"
            {...skill}
          />
        ))}
      </div>
    </div>
  );
};
