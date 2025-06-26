import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from "@/components/ui/accordion";

const items: {
  id: number;
  value: string;
  title: string;
  content: { type: string; text: string; items?: string[] };
}[] = [
  {
    id: 1,
    value: "item-1",
    title: "What is ATIRC and what does it stand for?",
    content: {
      type: "text",
      text: "ATIRC stands for Advanced Technological Innovation and Research Center. It is a technology hub based at Moshood Abiola Polytechnic (MAPOLY), dedicated to empowering Africa’s youth through advanced training, research, and incubation in cutting-edge technology fields."
    }
  },
  {
    id: 2,
    value: "item-2",
    title: "Who can participate in ATIRC programs?",
    content: {
      type: "text",
      text: "ATIRC programs are open to young Africans aged 15 to 30, including students, career switchers, aspiring tech entrepreneurs, and innovators looking to gain real-world tech skills or launch their startups."
    }
  },

  {
    id: 4,
    value: "item-4",
    title: "What kind of training does ATIRC offer?",
    content: {
      type: "list",
      text: `ATIRC provides hands-on training in areas such as:`,
      items: [
        "Software Development",
        "Cybersecurity",
        "Cloud Computing & DevOps",
        "AI/ML, Data Science, Robotics, UI/UX Design",
        "Game/Animation Development",
        "IT Project & Product Management"
      ]
    }
  },
  {
    id: 5,
    value: "item-5",
    title: "How does the incubation program work?",
    content: {
      type: "list",
      text: `The incubation program helps startups turn ideas into real businesses. We provide:`,
      items: [
        "Mentorship",
        "Access to funding",
        "Technical resources",
        "Industry partnerships",
        "Co‑working and prototyping support"
      ]
    }
  },
  {
    id: 6,
    value: "item-6",
    title: "What makes ATIRC different from other tech hubs?",
    content: {
      type: "text",
      text: "ATIRC combines accessibility, professionalism, and innovation in a supportive ecosystem. We bridge the gap between raw talent and global opportunity, ensuring our participants are globally competitive yet locally impactful."
    }
  },
  {
    id: 7,
    value: "item-7",
    title: "How can I get involved with ATIRC?",
    content: {
      type: "text",
      text: `You can join as a learner, mentor, partner, or startup founder. Simply visit <a href="https://atirc.edu.ng" target="_blank" rel="noopener noreferrer" class="text-primary underline"> atirc.edu.ng </a> or email us at <a href="mailto:info.mapoly@atirc.edu.ng" class="text-primary underline">info.mapoly@atirc.edu.ng</a> to apply, collaborate, or inquire about our upcoming programs.`
    }
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
          <AccordionContent className="flex flex-col gap-4 ">
            {item.content.type === "text" ? (
              <p dangerouslySetInnerHTML={{ __html: item.content.text }} />
            ) : (
              <ul className="list-disc list-inside pl-4 space-y-1">
                <p className="mb-2">{item.content.text}</p>
                {item.content.items?.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            )}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
