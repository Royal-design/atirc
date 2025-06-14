import teama from "@/assets/who-we-are/teama.jpg";
import teamb from "@/assets/who-we-are/teamb.jpg";
import teamc from "@/assets/who-we-are/teamc.jpg";
import teamd from "@/assets/who-we-are/teamd.jpg";
import { Card, CardContent, CardFooter } from "../ui/card";

const teams = [
  {
    name: "Khalil Balogun",
    title: "Director",
    image: teama
  },
  {
    name: "Nafisa Mahmud",
    title: "Research Mnager",
    image: teamb
  },
  {
    name: "Adelekan kafayat",
    title: "Incubation Manager",
    image: teamc
  },
  {
    name: "Emmanuel Macaulay",
    title: "Research Manager",
    image: teamd
  },
  {
    name: "Francis Leon",
    title: "Cofounde, Chairman Executive Director",
    image: null
  },
  {
    name: "Francis Leon",
    title: "Cofounde, Chairman Executive Director",
    image: null
  }
];

export const Team = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Meet Our Team
      </h1>
      <div className="grid grid-cols-1 gap-4 md:items-end md:grid-cols-6">
        {teams.map((team, id) => (
          <Card
            key={id}
            className={`p-0 border-none h-full flex flex-col shadow-none hover:shadow-md duration-200 transition-all ${
              team.title === "Director" ? " md:h-[100%]" : " md:h-[90%]"
            }`}
          >
            <CardContent className="p-0 overflow-hidden flex-1">
              <img
                src={team?.image ?? undefined}
                alt={team.name}
                className="w-full object-top max-md:h-[300px] duration-200 transition-transform hover:scale-105 object-cover"
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center justify-center p-2 mt-auto">
              <p className="font-bold text-sm md:text-xs text-center">
                {team.name}
              </p>
              <p className="text-accent-grey text-sm md:text-xs text-center">
                {team.title}
              </p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
