"use client";

import { FC, useState } from "react";
import { ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/base/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/base/collapsible";

const CollapsibleExample: FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className="w-full max-w-sm space-y-2">
      <div className="flex items-center justify-between space-x-4 px-2">
        <h4 className="text-sm flex gap-1">
          <span className="text-muted-foreground font-semibold">@peduarte</span>
          <span className="font-medium">starred 3 repositories</span>
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="w-9 p-0">
            <ChevronsUpDown className="h-4 w-4" />
          </Button>
        </CollapsibleTrigger>
      </div>

      <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/primitives</div>
      <CollapsibleContent className="space-y-2 CollapsibleContent">
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@radix-ui/colors</div>
        <div className="rounded-md border px-4 py-3 font-mono text-sm">@stitches/react</div>
      </CollapsibleContent>
    </Collapsible>
  );
};

export default CollapsibleExample;
