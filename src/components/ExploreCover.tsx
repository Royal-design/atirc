import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

export const ExploreCover = () => {
  const navigate = useNavigate();
  return (
    <div className="my-4 mx-4 md:my-12 md:px-24">
      <div className="bg-primary text-white flex flex-col py-6 md:py-12 gap-6 justify-center items-center ">
        <h2 className="text-lg md:text-3xl md:max-w-[90%] mx-auto text-center">
          Explore careers where you can make a difference
        </h2>
        <p className="text-sm md:text-lg text-center">
          Unlock Your Future. Innovate, Learn, Lead with ATIRC.
        </p>
        <Button
          onClick={() => navigate("/career")}
          className="rounded-none text-primary bg-white hover:bg-white/90"
        >
          <span>Learn More</span>
          <IoIosArrowRoundForward />
        </Button>
      </div>
    </div>
  );
};
