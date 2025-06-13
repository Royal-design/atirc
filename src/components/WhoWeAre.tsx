import { IoIosArrowRoundForward } from "react-icons/io";
import { Button } from "./ui/button";
import whoweare from "@/assets/whoweare.jpg";

export const WhoWeAre = () => {
  return (
    <div className="px-4 md:px-24 mt-8 md:mt-12 flex flex-col md:flex-row gap-12">
      {/* image */}
      <div className="flex-1 md:h-130">
        <img
          src={whoweare}
          alt="What we do"
          className="w-full h-70 md:h-full object-cover object-bottom"
        />
      </div>
      {/* content */}
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col flex-grow">
          <h1 className="text-secondary max-md:text-center text-xl md:text-2xl font-bold mb-8">
            WHO WE ARE
          </h1>
          <h3 className="text-lg md:text-xl max-md:text-center font-semibold mb-4 md:mb-8">
            Igniting Innovation, Empowering Africa's Tech Future
          </h3>
          <p className="text-accent-grey text-base mb-8">
            Advanced Technological Incubation and Research Center (ATIRC), is a
            technological research and incubation center with the mission to
            empower Africa's Young Minds, ignite innovation across the continent
            and dispel the myth that world-class tech solutions can't emerge
            from African Soil. Founded with a vision to bridge the gap between
            raw talent and global opportunities ATIRC stands as a beacon of hope
            for aspiring tech enthusiasts, entrepreneurs, and researchers aged
            15 to 35. Our vision is to become Africa's leading technology
            incubation and research center, driving advancements in emerging
            technologies and providing a platform for young innovators to thrive
          </p>
        </div>
        <div className="flex justify-center md:justify-start mb-4">
          <Button className="rounded-none text-white">
            <span>Learn More</span>
            <IoIosArrowRoundForward />
          </Button>
        </div>
      </div>
    </div>
  );
};
