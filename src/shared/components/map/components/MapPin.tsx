import Image, { ImageProps } from "next/image";

import { markerDefaultOptions } from "../constants";
import { MarkerType } from "../map-types";

type MapPinProps = {
  markerProps:
    | Partial<Pick<ImageProps, "src" | "width" | "height">>
    | undefined;
};

export const MapPin = (props: MapPinProps) => {
  const { markerProps } = props;
  const markerOptions: MarkerType = {
    height: markerProps?.height ?? markerDefaultOptions.height,
    width: markerProps?.width ?? markerDefaultOptions.width,
    src: markerProps?.src ?? markerDefaultOptions.src,
  };
  return (
    <div
      style={{
        position: "absolute",
        top: `calc(50% - ${markerOptions.height}px)`,
        left: `calc(50% - ${+(markerOptions.width ?? 0) / 2}px)`,
        height: markerOptions?.height,
        width: markerOptions?.width,
      }}
    >
      <Image
        alt=""
        layout="fill"
        src={markerProps?.src ?? (markerDefaultOptions.src as string)}
      />
    </div>
  );
};
