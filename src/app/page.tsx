import { FC } from "react";
import { AccordionExample, AlertExample, AlertDialogExample, AspectRatioExample } from "@/components";

const HomePage: FC = (): JSX.Element => {
  return (
    <main className="container py-5 flex pb-52 flex-col gap-20">
      <AccordionExample />

      <AlertExample />

      <AlertDialogExample />

      <AspectRatioExample />
    </main>
  );
};

export default HomePage;

