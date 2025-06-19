import map from "@/assets/contact/map.png";

export const Map = () => {
  return (
    <div className="py-4 px-4 md:py-12 md:px-24">
      <h1 className="text-accent-black text-lg md:text-xl  uppercase font-bold text-center mb-4">
        Find us on Google map
      </h1>
      <p className="text-accent-grey text-base text-center mb-8 max-w-3xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Diam purus molestie vel semper
        nisl tristique mattis. Lectus id etiam quis quis nisl quis vel.
      </p>

      <div className=" w-full md:max-w-4xl mx-auto">
        <img src={map} alt="Map" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};
