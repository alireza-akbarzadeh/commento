import { Products } from "@/shared/config/mock-data";

type DiscountBadgePropsType = {
  discount: string;
  className?: string;
};

type SectionTitlePropType = {
  title: string;
};

type ComparetaionItemProps = { product: Products };

type FavoritesPropsType = {
  title: string;
  mode?: "dark" | "light";
};

export type {
  DiscountBadgePropsType,
  SectionTitlePropType,
  ComparetaionItemProps,
  FavoritesPropsType,
};
