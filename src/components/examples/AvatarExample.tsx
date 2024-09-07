import { FC } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/base/avatar";

const AvatarExample: FC = (): JSX.Element => {
  return (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};

export default AvatarExample;
