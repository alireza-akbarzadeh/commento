import Image from "next/image";
import React from "react";

type SVGProps = {
  path: string;
  alt: string;
  //   size will be multiply with 4
  size?: number;
};
export const Svg = (props: SVGProps) => {
  const { path, alt, size } = props;

  return (
    <div className={`relative size-${size}`}>
      <Image
        src={`/svg/${path}.svg`}
        alt={alt}
        priority
        className="size-full object-cover"
        sizes="100%"
        fill
      />
    </div>
  );
};
