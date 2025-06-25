import { Card, CardContent, CardFooter } from "./ui/card";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Skills = ({
  image,
  title,
  path,
  body,
  type = "apply"
}: {
  image: string;
  title: string;
  path: string;
  body: string;
  type?: string;
}) => {
  const navigate = useNavigate();
  return (
    <Card className="border-none max-md:max-w-sm max-md:mx-auto md:w-full shadow-none hover:shadow-md duration-200 transition-all p-0 gap-0">
      <CardContent className="p-0">
        <div className="h-60 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full duration-200 transition-all hover:scale-105 object-cover"
          />
        </div>
        <div className="p-4">
          <h1 className="font-bold text-lg">{title}</h1>
          <p className="text-accent-grey text-sm my-4">{body}</p>
        </div>
      </CardContent>
      <CardFooter className="p-2">
        <Button
          onClick={() => navigate(path)}
          variant="ghost"
          className="bg-transparent hover:bg-transparent text-primary cursor-pointer"
        >
          <span>{type === "contact" ? "Contact US" : "Apply here"}</span>
          <IoIosArrowRoundForward />
        </Button>
      </CardFooter>
    </Card>
  );
};
