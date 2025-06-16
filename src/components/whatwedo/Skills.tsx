import learning from "@/assets/what-we-do/learning.webp";
import research from "@/assets/what-we-do/research.webp";
import incubator from "@/assets/what-we-do/incubation.webp";
import consulting from "@/assets/what-we-do/consulting.webp";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

export const skills = [
  {
    id: 1,
    title: "Learning",
    body: "The Learning Component of ATIRC is designed to equip students and professionals with the essential IT skills needed to thrive in today’s rapidly evolving digital landscape. We focus on emerging technologies and provide cutting-edge training",
    image: learning,
    path: "learning"
  },
  {
    id: 2,
    title: "Research",
    body: "LATIRC aims to be a leader in applied research across multiple cutting-edge fields. ATIRC will prioritize research initiatives in several cutting-edge fields. This focus aims to foster innovation and address pressing challenges across various sectors.",
    image: research,
    path: "research"
  },
  {
    id: 3,
    title: "Incubation",
    body: "The incubation component of ATIRC is designed to support startups and entrepreneurs in transforming innovative ideas into viable businesses. The center provides a nurturing environment that fosters growth and development.",
    image: incubator,
    path: "incubation"
  },
  {
    id: 4,
    title: "Consulting",
    body: "The consulting arm of ATIRC provides expert advice and solutions to organizations looking to enhance their technological capabilities and operational efficiencies. We are dedicated to delivering expert IT consulting services that empower organizations to enhance their technological capabilities and operational efficiency.",
    image: consulting,
    path: "consulting"
  }
];

export const Skills = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl text-center my-4">
        Igniting Innovation, Empowering Africa's Tech Future
      </h1>
      <p className="md:text-lg text-accent-grey md:max-w-4xl md:mx-auto text-center">
        We offer state-of-the-art research facilities, upskilling programs, and
        incubation services to cultivate the next generation of African tech
        leaders. Through our commitment to innovation, collaboration, and global
        impact, we are reshaping Africa’s technological future and empowering
        youth to contribute meaningfully to the world’s digital economy
      </p>
      <div className="grid grid-cols-1 my-8 md:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <Link to={skill.path} key={skill.id}>
            <Card className="border-none max-md:max-w-sm max-md:mx-auto md:w-full shadow-none hover:shadow-md duration-200 transition-all p-0 gap-0">
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
                  <span>More</span>
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
