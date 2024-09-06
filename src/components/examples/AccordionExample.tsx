import { FC } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/base/accordion";

const AccordionExample: FC = (): JSX.Element => {
  return (
    <Accordion type="single" collapsible>
      {accordionItems.map((item) => (
        <AccordionItem key={item.id} value={`item-${item.id}`}>
          <AccordionTrigger className="hover:no-underline">{item.trigger}</AccordionTrigger>
          <AccordionContent>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionExample;

const accordionItems = [
  {
    id: 0,
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 1,
    trigger: "Is it accessible?2",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    id: 2,
    trigger: "Is it accessible?3",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
];
