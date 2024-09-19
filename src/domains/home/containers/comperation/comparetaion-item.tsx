import Link from "next/link";
import { useTranslations } from "next-intl";

import { ProductItem } from "@/domains/home/containers/comperation/product-item";
import { ComparetaionItemProps } from "@/domains/home/home-types";
import { Icon } from "@/shared/components";
import {
  Card,
  CardContent,
  CardFooter,
  CarouselItem,
  Separator,
} from "@/shared/ui";

export function ComparetaionItem(props: ComparetaionItemProps) {
  const { product } = props;
  const t = useTranslations("HomePage");
  return (
    <CarouselItem className="basis-[365px] p-2.5">
      <Card className="relative mb-3 rounded-2xl border-[0.5px] border-border-primary bg-content-inverse pt-2 shadow-elevation4">
        <CardContent className="flex justify-between gap-2 py-2">
          <ProductItem {...product} />
          <ProductItem {...product} />
        </CardContent>
        <Separator className="border-1 mx-auto mt-2 w-[90%] border-t border-border-primary" />
        <CardFooter className="flex w-full items-center justify-between py-3">
          <p className="text-content-primary text-labelMedium">
            {t("viewCompration")}
          </p>
          <div className="flex items-center">
            <Link
              href="/compare"
              className="flex-center size-6 rounded-full bg-surface-secondary"
            >
              <span className="pl-[3px] pt-[3px] text-content-tertiary text-labelMedium">
                ۲
              </span>
            </Link>
            <div className="size-6">
              <Icon
                iconClassName="text-content-tertiary"
                name="chevron-left"
                size="medium"
              />
            </div>
          </div>
        </CardFooter>
      </Card>
    </CarouselItem>
  );
}
