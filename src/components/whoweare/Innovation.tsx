import mission from "@/assets/who-we-are/mission.png";
import vision from "@/assets/who-we-are/vision.png";
import purpose from "@/assets/who-we-are/purpose.png";
import { cn } from "@/lib/utils";

const data: { title: string; body: string; image: string }[] = [
  {
    title: "Mission ",
    body: `Our mission is to empower Africa's young innovators by providing them with the knowledge, resources, and mentorship needed to excel in the rapidly evolving tech landscape. We aim to foster creativity, collaboration, and entrepreneurship through cutting-edge training programs and research initiatives, enabling youth to drive technological advancement and make meaningful contributions to the global market.`,
    image: mission
  },
  {
    title: "Vision ",
    body: `Our vision is to become Africa's leading EdTech, technology research, and incubation hub—where the brightest minds come together to shape the future of technology. We envision a thriving ecosystem where African youth lead innovation in AI, robotics, cybersecurity, biotechnology, and other emerging fields, contributing to a globally competitive digital economy`,
    image: vision
  },
  {
    title: "Purpose ",
    body: `We exist to transform Africa’s untapped potential into real-world impact by equipping young people with the skills, opportunities, and support they need to become tech leaders. Through research, mentorship, and incubation, we aim to provide a platform where innovation flourishes, and African youth can contribute to solving global challenges and building sustainable tech solutions.`,
    image: purpose
  }
];

export const Innovation = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl mb-4 md:mb-8 text-center">
        Igniting Innovation, Empowering Africa's Tech Future
      </h1>
      <p className="text-base md:text-lg text-accent-grey mb-4 md:mb-8 text-center md:max-w-4xl md:mx-auto">
        At ATIRC, we don’t just incubate ideas; we foster growth, spark
        creativity, and shape Africa's tech ecosystem, one visionary at a time.
        Join us as we build a future where Africa leads in innovation, tech, and
        global influence.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mt-8">
        {data.map((data, id) => (
          <div key={id} className="flex flex-col">
            <img
              src={data.image}
              alt={data.title}
              className={cn(
                "object-cover self-center",
                id === 2 ? "w-60 h-30" : "w-40 h-30"
              )}
            />
            <h2 className="font-bold text-center md:text-lg mt-4 mb-2">
              {data.title}
            </h2>
            <p className="text-accent-grey text-sm text-center">{data.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
