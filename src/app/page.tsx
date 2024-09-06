import { FC } from "react";
import { AccordionExample, AlertExample, AlertDialogExample } from "@/components";

const HomePage: FC = (): JSX.Element => {
  return (
    <main className="container py-5 flex flex-col gap-20">
      <AccordionExample />

      <AlertExample />

      <AlertDialogExample />
    </main>
  );
};

export default HomePage;

