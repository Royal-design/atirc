import icona from "@/assets/who-we-are/mission.png";
import iconb from "@/assets/who-we-are/vision.png";
import iconc from "@/assets/who-we-are/purpose.png";
import { Card, CardContent } from "../ui/card";
import { cn } from "@/lib/utils";

const data: { title?: string; body: string; image?: string; bg: boolean }[] = [
  {
    bg: false,
    body: `We believe in empowerment, providing the tools, mentorship, and resources needed for young minds to thrive. Collaboration fosters teamwork, bringing together diverse perspectives to solve real-world challenges. Our commitment to inclusivity ensures equal opportunities for all, while excellence pushes us to maintain the highest quality standards. We prioritize sustainability, ensuring our solutions have a long-term, positive impact. Above all, we uphold integrity, maintaining trust and transparency in every initiative we pursue`
  },
  {
    title: "Accessibility",
    body: "We strive to make our programs, resources, and mentorship accessible to young tech enthusiasts across Africa, breaking down barriers to entry in the tech world.",
    image: icona,
    bg: true
  },
  {
    title: "Innovation",
    body: "We foster an environment where creative thinking is celebrated and cutting-edge ideas are nurtured. Our research facilities and incubation and training  programs are designed to push the boundaries of what's possible in African tech",
    image: iconb,
    bg: true
  },
  {
    title: "Professionalism",
    body: "We instill a sense of professionalism in all our participants, preparing them for the global tech stage. From project management to presentation skills, we ensure that ATIRC alumni are ready to compete at an international level with confidence and competence.",
    image: icona,
    bg: true
  },
  {
    title: "Collaboration ",
    body: "We believe that the best innovations emerge from diverse minds working together. We create an ecosystem where young geniuses, curious learners, and career switchers can collaborate, share ideas, and build networks that last beyond our programs",
    image: iconb,
    bg: true
  },
  {
    title: "Empowerment",
    body: " Empowerment is at the core of everything we do. We don't just teach skills; we empower our participants with the knowledge, resources, and confidence to become leaders in their fields.",
    image: iconc,
    bg: true
  }
];

export const CoreValue = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        Our Core Value
      </h1>
      <p className="md:text-lg text-center text-accent-grey md:max-w-4xl mx-auto mb-4 md:mb-8">
        At ATIRC, our core values guide everything we do. Innovation drives us
        to explore creative solutions that push boundaries and unlock Africa’s
        potential. 
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 ">
        {data.map((data, id) => (
          <Card
            key={id}
            className={cn(
              " border-none shadow-none rounded-sm gap-0",
              data.bg ? "bg-primary/20 p-4" : "bg-transparent p-2"
            )}
          >
            <CardContent className="p-0">
              {data.bg ? (
                <div className="">
                  <img
                    src={data.image}
                    alt={data.title}
                    className={`object-cover shrink-0 ${
                      data.title === "Empowerment" ? "w-40 h-20" : "w-20 h-20 "
                    }`}
                  />
                  <p className="mt-2 font-bold mb-2">{data.title}</p>
                  <p className="text-accent-grey text-sm">{data.body}</p>
                </div>
              ) : (
                <p className="text-accent-grey text-sm px-2">{data.body}</p>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
