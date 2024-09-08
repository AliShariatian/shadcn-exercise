import { FC } from "react";
import { Checkbox } from "@/components/base/checkbox";

const CheckboxExample: FC = (): JSX.Element => {
  return (
    <div className="grid gap-2 w-fit">
      <label htmlFor="terms1" className="items-top cursor-pointer flex space-x-2 border rounded-md p-4">
        <Checkbox id="terms1" />
        <div className="grid gap-1.5 leading-none">
          <div className="text-sm font-medium leading-none">Accept terms and conditions</div>
          <p className="text-sm text-muted-foreground">You agree to our Terms of Service and Privacy Policy.</p>
        </div>
      </label>

      <label htmlFor="terms2" className="items-top cursor-pointer flex space-x-2 border rounded-md p-4">
        <Checkbox id="terms2" />
        <div className="grid gap-1.5 leading-none">
          <div className="text-sm font-medium leading-none">Accept us terms</div>
          <p className="text-sm text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit, Est repudiandae dolor.</p>
        </div>
      </label>
    </div>
  );
};

export default CheckboxExample;
