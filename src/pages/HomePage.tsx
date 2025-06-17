import { ExploreCover } from "@/components/ExploreCover";
import { HeroSection } from "@/components/HeroSection";
import { NewsHero } from "@/components/NewsHero";
import { TrendingNews } from "@/components/TrendingNews";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoWeAre } from "@/components/WhoWeAre";
import React from "react";

export const HomePage: React.FC = () => {
  return (
    <section className="flex flex-col">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <NewsHero />
      <TrendingNews />
      <ExploreCover />
    </section>
  );
};
