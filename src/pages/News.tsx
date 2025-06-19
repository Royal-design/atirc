import { Hero } from "@/components/news/Hero";
import { NewsContent } from "@/components/news/NewsContent";
import React from "react";

export const News: React.FC = () => {
  return (
    <div>
      <Hero />
      <NewsContent />
    </div>
  );
};
