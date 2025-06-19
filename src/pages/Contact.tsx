import { Form } from "@/components/contact/Form";
import { Hero } from "@/components/contact/Hero";
import { Map } from "@/components/contact/Map";
import React from "react";

export const Contact: React.FC = () => {
  return (
    <div>
      <Hero />
      <Form />
      <Map />
    </div>
  );
};
