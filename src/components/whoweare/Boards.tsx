import boarda from "@/assets/who-we-are/boarda.jpg";
import boardb from "@/assets/who-we-are/boardb.jpg";
import boardc from "@/assets/who-we-are/boardc.jpg";
import { Card, CardContent, CardFooter } from "../ui/card";

const data: {
  name: string;
  title: string;
  image: string;
  imageSize: string;
}[] = [
  {
    name: "Prof. Sheriffdeen Tella",
    title: "Advisory Board Member",
    image: boardb,
    imageSize: "normal"
  },
  {
    name: "Oba Prof. Saka Adelola Matemilola (Otileta VII)",
    title: "Chairman",
    image: boarda,
    imageSize: "large"
  },
  {
    name: "Prof. Adesina Sodiya",
    title: "Advisory Board Member",
    image: boardc,
    imageSize: "normal"
  }
];

export const Boards = () => {
  return (
    <div className="px-4 md:px-24 w-full py-8 md:py-12">
      <h1 className="text-2xl md:text-3xl text-center font-bold mb-8">
        Advisory board members
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-end">
        {data.map((data) => (
          <Card key={data.name} className={`p-0 gap-0 border-none w-xs `}>
            <CardContent className="overflow-hidden p-0">
              <img
                src={data.image}
                alt={data.name}
                className={`w-full  object-cover transition-transform duration-200 hover:scale-105 ${
                  data.imageSize === "large" ? "h-80" : "h-75 object-top"
                }`}
              />
            </CardContent>
            <CardFooter className="flex flex-col items-center p-0 bg-primary text-white h-12 justify-center">
              <h3 className="font-bold text-xs text-center">{data.name}</h3>
              <p className="text-muted-foreground text-xs">{data.title}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};
