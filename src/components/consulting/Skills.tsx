import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { consulting } from "@/data/consulting";

export const Skills = () => {
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
          <Link to="/application/consulting">
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
                  <span>Contact us</span>
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
