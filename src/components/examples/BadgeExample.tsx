import { FC } from "react";
import { Badge } from "@/components/base/badge";

const BadgeExample: FC = (): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <Badge variant="default">Ali Shariatian</Badge>
      <Badge variant="destructive">Ali Shariatian</Badge>
      <Badge variant="outline">Ali Shariatian</Badge>
      <Badge variant="secondary">Ali Shariatian</Badge>
    </div>
  );
};

export default BadgeExample;
