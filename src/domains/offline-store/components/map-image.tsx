import Image from "next/image";

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
