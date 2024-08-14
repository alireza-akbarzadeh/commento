import Image from "next/image";
import { BackButton } from "@/shared/components";
import { Separator } from "@/shared/ui";
import {
  Badges,
  ContactButtons,
  FeaturesList,
  RatingAndReport,
  StoreHeader,
  Summary,
} from "./components";

export function MapImage() {
  return (
    <div className="relative h-[180px] w-full">
      <Image
        src="/images/map.png"
        alt="map"
        className="size-full object-cover"
        sizes="100%"
        fill
      />
    </div>
  );
}

export function StoreDetails() {
  const items = ["ارسال رایگان ", "اوپنباکس", "تحویل فوری ", "پرداخت در محل"];

  return (
    <div className="h-full bg-content-inverse">
      <BackButton />
      <MapImage />
      <div className="mt-4 px-4">
        <StoreHeader />
        <RatingAndReport />
        <Separator
          orientation="horizontal"
          className="mb-2 mt-6 border-[0.6px] border-border-primary"
        />
        <Summary />
        <Badges />
        <FeaturesList items={items} />
        <Separator
          orientation="horizontal"
          className="my-6 border-[0.6px] border-border-primary"
        />
        <ContactButtons />
      </div>
    </div>
  );
}
