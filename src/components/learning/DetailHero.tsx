import React from "react";

interface PropsType {
  image: string;
  title: string;
  body: string;
}

export const DetailHero: React.FC<PropsType> = ({ image, title, body }) => {
  return (
    <div className="relative w-full h-[500px] lg:h-screen">
      <figure className="absolute inset-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/50" />
      </figure>
      {/* content */}
      <div className="relative max-md:px-4 px-24 z-10 w-full h-full text-white flex flex-col justify-end">
        <div className="flex flex-col items-center md:items-start  md:max-w-2xl">
          <h1 className="text-white max-md:text-center text-2xl md:text-4xl leading-[130%] font-bold mb-12">
            {title}
          </h1>
          <p className="max-md:text-sm text-base mb-8 max-md:text-center leading-[200%]">
            {body}
          </p>
        </div>
      </div>
    </div>
  );
};
