import { Card, CardContent, CardFooter } from "../ui/card";
import { Button } from "../ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import intern from "@/assets/career/intern.jpg";
import job from "@/assets/career/job.jpg";
import { Link } from "react-router-dom";

type Application = {
  id: number;
  image: string;
  title: string;
  body: string;
  path: string;
};

const data: Application[] = [
  {
    id: 1,
    image: intern,
    title: "Internship Application",
    path: "/application/internship",
    body: "Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper nisl Lorem ipsum dolor sit amet consectetur."
  },
  {
    id: 2,
    image: job,
    title: "Job Application",
    path: "/application/job",
    body: "Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper nisl Lorem ipsum dolor sit amet consectetur."
  }
];

const CareerCard = (application: Application) => {
  return (
    <Card
      key={application.id}
      className="border-none max-md:max-w-sm max-md:mx-auto md:w-full shadow-none hover:shadow-md duration-200 transition-all p-0 gap-0"
    >
      <CardContent className="p-0">
        <div className="h-60 overflow-hidden">
          <img
            src={application.image}
            alt={application.image}
            className="h-full w-full duration-200 transition-all hover:scale-105 object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="font-bold text-lg">{application.title}</h1>
          <p className="text-accent-grey text-sm my-4">{application.body}</p>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Button
          variant="ghost"
          className="bg-transparent hover:bg-transparent text-primary"
        >
          <Link to={application.path}>Apply here</Link>
          <IoIosArrowRoundForward />
        </Button>
      </CardFooter>
    </Card>
  );
};

export const CareerContent = () => {
  return (
    <div className="py-4 px-4 md:py-12 md:px-24">
      <h1 className="text-accent-black text-lg md:text-xl uppercase font-bold text-center mb-4">
        Make your move toward a new career path
      </h1>
      <p className="text-accent-grey text-base text-center mb-8 md:max-w-4xl md:mx-auto">
        Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper
        nisl tristique mattis. Lectus id etiam quis quis nisl quis vel.
      </p>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((data) => (
          <CareerCard key={data.id} {...data} />
        ))}
      </div>
    </div>
  );
};
