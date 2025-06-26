import React from "react";
import banner from "@/assets/banner.jpg";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const HeroSection: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-[500px] md:h-[500px] lg:h-screen">
      <figure className="absolute inset-0">
        <img
          src={banner}
          alt="Banner"
          className="w-full h-full object-cover "
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
      </figure>
      {/* content */}
      <div className="relative max-md:px-4 px-24 z-10 w-full h-full text-white flex flex-col justify-center">
        <div className="flex flex-col items-center md:items-start  md:max-w-2xl">
          <h1 className="text-white max-md:text-center text-2xl md:text-4xl leading-[130%] font-bold mb-12">
             Igniting Innovation, Empowering Africa's Tech Future
          </h1>
          <p className="max-md:text-sm text-base mb-8 max-md:text-center">
            To become Africa’s leading EdTech and technology research center,
            driving innovation and empowering the next generation to lead in
            global markets. Through research, community building, and
            collaboration with industry partners, ATIRC is creating a foundation
            for lasting impact in Africa’s technological landscape.
          </p>
          <Button
            onClick={() => navigate("/who-we-are")}
            className="rounded-none cursor-pointer"
          >
            <span>Learn More</span>
            <IoIosArrowRoundForward />
          </Button>
        </div>
      </div>
    </div>
  );
};
