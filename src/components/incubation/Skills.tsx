import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { incubation } from "@/data/incubation";

export const Skills = () => {
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
          <Link to="/application/incubation">
            <Card
              key={skill.id}
              className="border-none max-md:max-w-sm max-md:mx-auto md:w-full shadow-none hover:shadow-md duration-200 transition-all p-0 gap-0"
            >
              <CardContent className="p-0">
                <div className="h-60 overflow-hidden">
                  <img
                    src={skill.image}
                    alt={skill.image}
                    className="h-full w-full duration-200 transition-all hover:scale-105 object-cover"
                  />
                </div>
                <div className="p-4">
                  <h1 className="font-bold text-lg">{skill.title}</h1>
                  <p className="text-accent-grey text-sm my-4">{skill.body}</p>
                </div>
              </CardContent>
              <CardFooter className="p-2">
                <Button
                  variant="ghost"
                  className="bg-transparent hover:bg-transparent text-primary"
                >
                  <span>Apply here</span>
                  <IoIosArrowRoundForward />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};
