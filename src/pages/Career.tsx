import { CareerContent } from "@/components/career/CareerContent";
import { Hero } from "@/components/career/Hero";
import { Hiring } from "@/components/career/Hiring";
import React from "react";

export const Career: React.FC = () => {
  return (
    <div>
      <Hero />
      <CareerContent />
      <Hiring />
    </div>
  );
};
