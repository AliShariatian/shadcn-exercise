import { FC } from "react";
import { Card, CardContent } from "@/components/base/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/base/carousel";

const CarouselExample: FC = (): JSX.Element => {
  return (
    <Carousel
      opts={{
        align: "start",
        dragFree: false,
        loop: false,
      }}
      className="w-full"
    >
      <CarouselContent className="-ml-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <CarouselItem key={index} className="pl-2 border-none active:cursor-grabbing cursor-grab basis-1/2 md:basis-1/3 lg:basis-1/5 w-full max-w-sm">
            <Card className="select-none">
              <CardContent className="flex aspect-square items-center justify-center">
                <span className="text-3xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Arrows */}
      <div className="relative flex w-fit ml-auto items-center gap-2 mt-2">
        <CarouselPrevious className="static translate-y-0 disabled:opacity-20" />
        <CarouselNext className="static translate-y-0 disabled:opacity-20" />
      </div>
    </Carousel>
  );
};

export default CarouselExample;
