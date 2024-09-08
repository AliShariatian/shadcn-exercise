import { FC } from "react";
import { Button, buttonVariants } from "@/components/base/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogClose, DialogFooter } from "@/components/base/dialog";

const DialogExample: FC = (): JSX.Element => {
  return (
    <Dialog>
      <DialogTrigger className={`${buttonVariants({ variant: "default" })} w-fit`}>Open Dialog</DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>This action cannot be undone. This will permanently delete your account and remove your data from our servers.</DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DialogExample;
