import { ExploreCover } from "@/components/ExploreCover";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { NewsHero } from "@/components/NewsHero";
import { TrendingNews } from "@/components/TrendingNews";
import { WhatWeDo } from "@/components/WhatWeDo";
import { WhoWeAre } from "@/components/WhoWeAre";
import React, { useEffect } from "react";

export const HomePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <section className="flex flex-col">
      <HeroSection />
      <WhoWeAre />
      <WhatWeDo />
      <NewsHero />
      <TrendingNews />
      <ExploreCover />
      <Footer />
    </section>
  );
};
