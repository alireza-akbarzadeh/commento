import { CSSProperties, RefObject, useState } from "react";
import { MapRef } from "react-map-gl";

import { LatLng } from "../map-types";

export type UseMapActionProps = {
  mapRef: RefObject<MapRef>;
};

type CursorType = CSSProperties["cursor"];

export const useMapAction = () => {
  const [cursor, setCursor] = useState<CursorType>("grab");
  const [selectedLatLng, setSelectedLatLng] = useState<LatLng | null>();

  return { setCursor, cursor, selectedLatLng, setSelectedLatLng };
};
