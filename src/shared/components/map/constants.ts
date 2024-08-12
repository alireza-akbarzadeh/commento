import type { Style } from "mapbox-gl";

import { MarkerType } from "@/shared/components/map/map-types";

const markerDefaultOptions: MarkerType = {
  src: "/svg/map-pin.svg",
  height: 50,
  width: 34,
};

const mapStyleObject: Style = {
  version: 8,
  name: "Map.irStreets",
  sources: {
    "Map.irStreets": {
      type: "raster",
      tiles: [
        `${process.env.NEXT_PUBLIC_GATEWAY}/Web/Locality/Maps/get-raster-tile-filestream/{z}/{x}/{y}.png`,
      ],
    },
  },
  layers: [
    {
      id: "Map.irStreets",
      type: "raster",
      source: "Map.irStreets",
      paint: {
        "raster-fade-duration": 100,
      },
    },
  ],
};

export { mapStyleObject, markerDefaultOptions };
