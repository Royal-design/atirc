import { Card, CardContent } from "./ui/card";
import { IoEyeSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import type { BlogPost } from "@/redux/slices/blogSlice";
import { useNavigate } from "react-router-dom";

export const NewsCard = ({ body, date, image, title, views }: BlogPost) => {
  const navigate = useNavigate();
  return (
    <Card className="border-none rounded-none shadow-none hover:shadow-md transition-shadow">
      <CardContent className="p-0 overflow-hidden">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          {/* Date and Views */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs text-gray-500">{date}</p>
            <div className="flex items-center gap-1 text-gray-500">
              <IoEyeSharp className="text-sm" />
              <span className="text-xs">{views}</span>
            </div>
          </div>

          {/* Title and Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="">
              <h1 className="mb-4 line-clamp-1">{title}</h1>
              <h3 className="text-base font-medium text-accent-black flex-1 line-clamp-3">
                {body}
              </h3>
            </div>

            <Button
              onClick={() => navigate("/news")}
              variant="ghost"
              className="text-primary p-0 hover:bg-transparent hover:text-primary/80 self-end md:self-auto"
            >
              <span className="mr-1">More</span>
              <IoIosArrowRoundForward className="size-5" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
