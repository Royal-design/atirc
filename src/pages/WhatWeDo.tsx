import { Footer } from "@/components/Footer";
import { Atirc } from "@/components/whatwedo/Atirc";
import { FAQ } from "@/components/whatwedo/FAQ";
import { Hero } from "@/components/whatwedo/Hero";
import { Skills } from "@/components/whatwedo/Skills";
import React from "react";

export const WhatWeDo: React.FC = () => {
  return (
    <div>
      <Hero />
      <Skills />
      <FAQ />
      <Atirc />
      <Footer />
    </div>
  );
};
