import { Hero } from "@/components/consulting/Hero";
import { Skills } from "@/components/consulting/Skills";
import sdcover from "@/assets/consulting/sdcover.webp";
import itcover from "@/assets/consulting/itcover.jpg";

import { Button } from "@/components/ui/button";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const Consulting = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Hero />
      <Skills />
      <div className="px-4 md:px-24 w-full py-8">
        <img
          src={sdcover}
          alt="Software Cover"
          className="w-full h-60 object-cover"
        />
        <div className="">
          <h3 className="text-lg md:text-xl font-bold my-4">
            Custom Software Development
          </h3>
          <blockquote className="flex md:ml-85">
            <p className="text-accent-grey w-full md:max-w-xl">
              Our custom software development consulting services provide
              businesses with tailored software solutions designed to meet their
              unique needs. ATIRC experts collaborate with organizations to
              create scalable, efficient, and secure software applications,
              helping them improve operational efficiency, automate processes,
              and enhance customer experience. We specialize in bespoke
              solutions for diverse industries.
            </p>
          </blockquote>

          <Button
            onClick={() => navigate("/application/consulting")}
            variant="ghost"
            className="bg-transparent px-0 has-[>svg]:px-0 hover:bg-transparent text-primary"
          >
            <span>Contact us</span>
            <IoIosArrowRoundForward />
          </Button>
        </div>
      </div>

      <div className="px-4 md:px-24 w-full py-8">
        <img
          src={itcover}
          alt="IT Cover"
          className="w-full h-30 object-cover"
        />
        <div className="">
          <h3 className="text-lg md:text-xl font-bold my-4">IT Outsourcing</h3>
          <blockquote className="flex md:ml-85">
            <p className="text-accent-grey w-full md:max-w-xl">
              ATIRC’s IT outsourcing services enable businesses to reduce costs,
              improve service quality, and focus on core competencies. Our
              consultants help organizations outsource key IT functions, such as
              helpdesk support, infrastructure management, and software
              development, ensuring seamless operations while allowing
              businesses to remain agile and competitive in their respective
              markets.
            </p>
          </blockquote>

          <Button
            onClick={() => navigate("/application/consulting")}
            variant="ghost"
            className="bg-transparent px-0 has-[>svg]:px-0 hover:bg-transparent text-primary"
          >
            <span>Contact us</span>
            <IoIosArrowRoundForward />
          </Button>
        </div>
      </div>
    </div>
  );
};
