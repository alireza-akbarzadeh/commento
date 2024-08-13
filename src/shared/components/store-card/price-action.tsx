"use client";

import { Icon } from "@/shared/components";
import { CURRENCY } from "@/shared/constant";
import { Button } from "@/shared/ui";
import { StoreCardProps } from "./store-card";

type PriceActionProps = Pick<StoreCardProps, "blank" | "navigation">;

export const PriceAction = (props: PriceActionProps) => {
  const { navigation, blank } = props;
  const handleRedirect = () => {
    if (!navigation) return;
    if (blank) {
      window.open(navigation, "_blank");
    } else {
      window.location.href = navigation || "";
    }
  };
  return (
    <div className="flex items-center justify-between border-t border-border-primary py-3">
      <p className="text-content-primary text-labelMedium">
        ۱‍۶۷,۰۰۰
        <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
      </p>
      <Button className="size-[32px] rounded-xl" onClick={handleRedirect}>
        <Icon iconClassName="text-content-invers" name="chevron-left" />
      </Button>
    </div>
  );
};
