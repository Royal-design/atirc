import { Card, CardContent } from "./ui/card";
import blockchain from "@/assets/blockchain.jpg";
import { IoEyeSharp } from "react-icons/io5";
import { Button } from "./ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";

export const NewsCard = () => {
  return (
    <Card className="border-none rounded-none shadow-none hover:shadow-md transition-shadow">
      <CardContent className="p-0 overflow-hidden">
        {/* Image */}
        <div className="w-full h-48 overflow-hidden">
          <img
            src={blockchain}
            alt="blockchain"
            className="w-full h-full object-cover hover:scale-105 transition-transform"
          />
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          {/* Date and Views */}
          <div className="flex justify-between items-center mb-3">
            <p className="text-xs text-gray-500">Updated on October 17, 2024</p>
            <div className="flex items-center gap-1 text-gray-500">
              <IoEyeSharp className="text-sm" />
              <span className="text-xs">128</span>
            </div>
          </div>

          {/* Title and Button */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <h3 className="text-base font-medium text-accent-black flex-1">
              Revolutionizing Security and Decentralization: Transforming
              Industries with Artificial Intelligence
            </h3>
            <Button
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
