import hero from "@/assets/who-we-are/hero.webp";
import BreadCrumb from "../BreadCrumb";

export const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] md:h-[480px]">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="hero"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/20"></div>
      </div>
      <div className="relative h-full w-full flex flex-col justify-center md:justify-end px-4  md:pb-12 md:px-24">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-white mb-2">
            Who We Are
          </h1>
          <BreadCrumb className="text-accent-grey" />
        </div>
      </div>
    </div>
  );
};
