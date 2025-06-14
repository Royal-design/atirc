import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const items = [
  {
    id: 1,
    value: "item-1",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  },
  {
    id: 2,
    value: "item-2",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  },
  {
    id: 3,
    value: "item-3",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  },
  {
    id: 4,
    value: "item-4",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  },
  {
    id: 5,
    value: "item-5",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  },
  {
    id: 6,
    value: "item-6",
    title: "How long Does it take to complete a course",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, cupiditate!"
  }
];

export function FAQAccordion() {
  return (
    <Accordion
      type="single"
      collapsible
      className="w-full"
      defaultValue="item-1"
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          value={item.value}
          className="border-none space-y-2"
        >
          <AccordionTrigger className="border border-accent-grey hover:no-underline p-2">
            {item.title}
          </AccordionTrigger>
          <AccordionContent className="flex flex-col gap-4 text-balance">
            <p>{item.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
