import banner from "@/assets/explorebanner.jpg";

export const NewsHero = () => {
  return (
    <div className="relative h-80 md:h-110">
      <div className="absolute inset-0">
        <img src={banner} alt="banner" className="h-full w-full object-cover" />
        {/* overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      {/* content */}
      <div className="relative z-10 flex flex-col w-full h-full justify-center">
        <div className="px-4 md:px-24 text-white">
          <h1 className="text-2xl md:text-4xl leading-[150%] mb-4 max-md:text-center w-full md:max-w-xl">
            Explore careers where you can make a difference
          </h1>
          <p className="text-lg md:text-xl text-center md:text-start">
            Unlock Your Future. Innovate, Learn, Lead with ATIRC
          </p>
        </div>
      </div>
    </div>
  );
};
