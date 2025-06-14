import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";

export const ExploreCover = () => {
  return (
    <div className="my-4 mx-4 md:my-12 md:px-24">
      <div className="bg-primary text-white flex flex-col py-9 md:py-12 gap-6 justify-center items-center ">
        <h2 className="text-xl md:text-3xl md:max-w-[90%] mx-auto text-center">
          Explore careers where you can make a difference
        </h2>
        <p className="text-base md:text-lg text-center">
          Unlock Your Future. Innovate, Learn, Lead with ATIRC.
        </p>
        <Button className="rounded-none text-primary bg-white hover:bg-white/90">
          <span>Learn More</span>
          <IoIosArrowRoundForward />
        </Button>
      </div>
    </div>
  );
};
