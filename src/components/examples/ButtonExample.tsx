import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/base/button";

const ButtonExample: FC = (): JSX.Element => {
  return (
    <div className="flex items-center gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>

      <Button asChild>
        <Link href="/">asChild</Link>
      </Button>
    </div>
  );
};

export default ButtonExample;
