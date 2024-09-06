import { FC } from "react";
import { AccordionExample, AlertExample } from "@/components";

const HomePage: FC = (): JSX.Element => {
  return (
    <main className="container py-5 flex flex-col gap-20">
      <AccordionExample />

      <AlertExample />
    </main>
  );
};

export default HomePage;

