import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

export const RootLayout: React.FC = () => {
  return (
    <>
      <ScrollRestoration />
      <div className="w-full h-dvh md:h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};
