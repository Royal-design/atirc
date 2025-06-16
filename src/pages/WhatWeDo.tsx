import { Atirc } from "@/components/whatwedo/Atirc";
import { FAQ } from "@/components/whatwedo/FAQ";
import { Hero } from "@/components/whatwedo/Hero";
import { Skills } from "@/components/whatwedo/Skills";
import React, { useEffect } from "react";

export const WhatWeDo: React.FC = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0
    });
  }, []);
  return (
    <div>
      <Hero />
      <Skills />
      <FAQ />
      <Atirc />
    </div>
  );
};
