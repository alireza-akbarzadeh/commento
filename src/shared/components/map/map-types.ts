import { ImageProps } from "next/image";
import { ViewState } from "react-map-gl";

type LatLng = {
  lng?: number;
  lat?: number;
};

type AddressInformation = {
  cityId?: string;
  provinceId?: string;
  addressTitle?: string;
};

type MarkerType = Partial<Pick<ImageProps, "src" | "width" | "height">>;

type SearchBoxProps = {
  onSearchMounted?: (ref: searchType) => void;
  addressInformation?: AddressInformation;
};

type searchType = {
  id?: string;
  address?: string;
  location?: Location;
  name?: string;
  nameEn?: string;
};

type MapProps = {
  handleLoadingLocation?: (loading: boolean) => void;
  onChangeLocation?: (event: LatLng) => void;
  onClick?: (value: LatLng) => void;
  isShowSearch?: boolean;
  searchProps?: SearchBoxProps;
  readOnly?: boolean;
  showPopUp?: boolean;
  readOnlyOnClick?: () => void;
  markerProps?: MarkerType;
  addressInformation?: AddressInformation;
  centerMode?: boolean;
  onNavigationChanged?: (value: LatLng) => void;
  baseMode?: boolean;
  onNextStep?: () => Promise<void>;
  loading?: boolean;
  nextStateDisabled?: boolean;
} & Partial<Pick<ViewState, "zoom" | "latitude" | "longitude">>;

export type {
  AddressInformation,
  LatLng,
  MapProps,
  MarkerType,
  SearchBoxProps,
  searchType,
};
