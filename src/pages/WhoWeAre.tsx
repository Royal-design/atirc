import { ExploreCover } from "@/components/ExploreCover";
import { Boards } from "@/components/whoweare/Boards";
import { CoreValue } from "@/components/whoweare/CoreValue";
import { HeroSection } from "@/components/whoweare/HeroSection";
import { Innovation } from "@/components/whoweare/Innovation";
import { Story } from "@/components/whoweare/Story";
import { Team } from "@/components/whoweare/Team";
import React from "react";

export const WhoWeAre: React.FC = () => {
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
