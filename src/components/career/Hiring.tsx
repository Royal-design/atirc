import { Button } from "../ui/button";

// type data = {
//   id: number;
//   title: string;
//   body: string;
// };

const JobCard = () => {
  return (
    <div className="flex justify-between pb-4 border-b border-accent-grey">
      <article className="flex flex-col gap-2">
        <h2 className="text-accent-black text-lg md:text-xl font-semibold">
          Data Analyst
        </h2>
        <p className="text-accent-grey text-sm">
          Locations: Lorem ipsum dolor sit amet consectetur. Diam purus molestie
          vel
        </p>
      </article>
      <Button className="text-primary px-8 rounded-none bg-white hover:bg-white/90 transition-colors duration-200">
        Apply
      </Button>
    </div>
  );
};

export const Hiring = () => {
  return (
    <div className=" bg-[#EEEEEE]">
      <div className="py-4 px-4 md:py-12 md:px-24">
        <h1 className="text-accent-black text-lg md:text-xl uppercase font-bold text-center mb-4">
          We’re Hiring
        </h1>
        <p className="text-accent-grey text-base text-center mb-8 md:max-w-3xl md:mx-auto">
          Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper
          nisl tristique mattis. Lectus id etiam quis quis nisl quis vel.
        </p>
        <div className="my-8 md:my-12 space-y-4 md:space-y-6">
          {[...Array(8).keys()].map((_, i) => (
            <JobCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};
