import { FC } from "react";
import { addSpaces } from "@/utils";
import * as Examples from "@/components";
import { ComponentIcon } from "lucide-react";
import { Badge } from "@/components/base/badge";

const HomePage: FC = (): JSX.Element => (
  <main className="container py-5 flex pb-52 flex-col gap-20">
    {Object.entries(Examples).map(([name, Component]: [string, FC]) => (
      <Item key={name} name={name} Component={Component} />
    ))}
  </main>
);

const Item: FC<{ name: string; Component: FC }> = ({ Component, name }): JSX.Element => (
  <div className="flex flex-col gap-4">
    <Badge variant="secondary" className="w-fit gap-1 text-gray-500 rounded-md px-2">
      <ComponentIcon className="size-3" />
      {addSpaces(name)}
    </Badge>

    <Component />
  </div>
);

export default HomePage;

