import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { research } from "@/data/research";

export const Skills = () => {
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
          <Link to="/application/research">
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
