import { FC } from "react";
import { Progress } from "@/components/base/progress";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/base/hover-card";

const ProgressExample: FC = (): JSX.Element => {
  const ProgressValue = 33;

  return (
    <div className="max-w-sm w-full">
      <HoverCard openDelay={300} closeDelay={100}>
        <HoverCardTrigger>
          <Progress value={ProgressValue} />
        </HoverCardTrigger>
        <HoverCardContent side="top" align="center" sideOffset={8} className="w-8 grid place-content-center rounded-full p-0 text-sm aspect-square shrink-0">
          {ProgressValue}
        </HoverCardContent>
      </HoverCard>
    </div>
  );
};

export default ProgressExample;
