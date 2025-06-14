import type { skills } from "@/data/data";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const SkillCard: React.FC<(typeof skills)[0]> = ({
  body,
  image,
  title
}) => {
  return (
    <Card className="rounded-none  border-none shadow-none hover:shadow-md transition-shadow overflow-hidden">
      <CardContent className="p-0 flex flex-col h-full">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-xl font-semibold mb-3 md:text-2xl">{title}</h2>

          <div className="flex flex-col md:flex-row justify-between gap-4 mt-auto">
            <p className="text-sm text-gray-700 md:max-w-[70%]">{body}</p>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Explore"
              className="bg-accent-black/50 w-fit px-1 rounded-none hover:bg-accent-grey/80 md:self-center"
            >
              <IoIosArrowRoundForward className="text-white size-6" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
