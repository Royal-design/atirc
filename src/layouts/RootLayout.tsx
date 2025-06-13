import { Navbar } from "@/components/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <div className="w-full h-dvh md:h-screen ">
      <Navbar />
      <main className="">
        <Outlet />
      </main>
    </div>
  );
};
