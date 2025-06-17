import { skills } from "@/data/data";
import { SkillCard } from "./SkillCard";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const WhatWeDo = () => {
  return (
    <section className="px-4 md:px-24 py-4 md:my-12">
      <h1 className="text-xl md:text-2xl text-secondary text-center mb-4 font-bold uppercase">
        What we do
      </h1>
      <h3 className="text-center text-xl md:text-2xl mb-4 font-semibold">
        Igniting Innovation, Empowering Africa's Tech Future
      </h3>
      <p className="text-accent-grey text-base md:text-center mb-8 md:max-w-4xl mx-auto">
        We offer state-of-the-art research facilities, upskilling programs, and
        incubation services to cultivate the next generation of African tech
        leaders. Through our commitment to innovation, collaboration, and global
        impact, we are reshaping Africa’s technological future and empowering
        youth to contribute meaningfully to the world’s digital economy
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {skills.map((skill) => (
          <Link key={skill.id} to={skill.path}>
            <SkillCard {...skill} />
          </Link>
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="rounded-none text-white">
          <span>Learn More</span>
          <IoIosArrowRoundForward />
        </Button>
      </div>
    </section>
  );
};
