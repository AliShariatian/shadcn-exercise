import { FC } from "react";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/base/hover-card";
import { buttonVariants } from "../base/button";

const HoverCardExample: FC = (): JSX.Element => {
  return (
    <div className="w-fit">
      <HoverCard openDelay={300} closeDelay={100}>
        <HoverCardTrigger className={buttonVariants({ variant: "default" })}>Hover Me</HoverCardTrigger>
        <HoverCardContent side="top" sideOffset={8}>
          The React Framework – created and maintained by @vercel.
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default HoverCardExample;
