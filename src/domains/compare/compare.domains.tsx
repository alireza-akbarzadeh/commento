import { Icon } from "@/shared/components";
import { Button, Carousel, CarouselContent, CarouselItem } from "@/shared/ui";
import { CompareItem } from "./components";
import { CompareRow } from "./components/compare-row";
import { ComprationBar } from "./components/compration-bar";

export function CompareDomains() {
  const title = "گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت ";
  const latinName = "iphone-13-ch-dual-sim";
  return (
    <div className="relative size-full h-screen bg-content-inverse">
      <ComprationBar />
      <Carousel opts={{ direction: "rtl", dragFree: true }}>
        <CarouselContent className="bg-content-inverse">
          {[...Array(5)].map((product, index) => (
            <CarouselItem key={index} className={`basis-5/6 p-2.5`}>
              <div className="grid grid-cols-2">
                <CompareRow />
                <CompareRow />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute bottom-6 left-6">
        <Button className="size-[52px] rounded-xl">
          <Icon name="plus" iconClassName="text-content-inverse" />
        </Button>
      </div>
    </div>
  );
}
