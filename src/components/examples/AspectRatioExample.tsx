import { FC } from "react";
import Image from "next/image";
import picture from "@/public/imgs/01.jpg";
import { AspectRatio } from "../base/aspect-ratio";

const AspectRatioExample: FC = (): JSX.Element => {
  return (
    <div className="border border-green-500 rounded-md border-dashed p-4">
      <AspectRatio ratio={5 / 3} className="border border-red-500">
        <Image src={picture} alt="" fill />
      </AspectRatio>

      <Separator />

      <div className="aspect-[5/3] border border-red-500 relative">
        <Image src={picture} alt="" fill />
      </div>
    </div>
  );
};

export default AspectRatioExample;

const Separator = () => (
  <div className="flex gap-4 my-9 items-center">
    <hr className="border-dashed border-green-500 grow" />

    <p className="flex items-center gap-1">
      <span className="text-sm font-semibold">There is no difference!</span>
      <span className="text-xs bg-gray-200 font-medium py-0.5 px-1 text-gray-500 rounded-sm">(Check Code)</span>
    </p>

    <hr className="border-dashed border-green-500 grow" />
  </div>
);
