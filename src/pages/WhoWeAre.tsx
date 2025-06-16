import { ExploreCover } from "@/components/ExploreCover";
import { Boards } from "@/components/whoweare/Boards";
import { CoreValue } from "@/components/whoweare/CoreValue";
import { HeroSection } from "@/components/whoweare/HeroSection";
import { Innovation } from "@/components/whoweare/Innovation";
import { Story } from "@/components/whoweare/Story";
import { Team } from "@/components/whoweare/Team";
import React, { useEffect } from "react";

export const WhoWeAre: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <HeroSection />
      <Story />
      <Innovation />
      <Boards />
      <CoreValue />
      <Team />
      <ExploreCover />
    </div>
  );
};
