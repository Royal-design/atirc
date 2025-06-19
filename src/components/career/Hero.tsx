import hero from "@/assets/career/hero.jpg";
import BreadCrumb from "../BreadCrumb";

export const Hero = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-screen">
      <div className="absolute inset-0">
        <img
          src={hero}
          alt="hero"
          className="h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-black/10"></div>
      </div>
      <div className="relative h-full w-full flex flex-col justify-center md:justify-end px-4  md:pb-12 md:px-24">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-2xl md:text-4xl text-center md:text-start font-bold text-white mb-2">
            Career
          </h1>
          <BreadCrumb className="text-white" />
        </div>
      </div>
    </div>
  );
};
