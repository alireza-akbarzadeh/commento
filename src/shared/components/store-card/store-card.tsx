"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

import { Icon } from "@/shared/components";
import { Badge, Button } from "@/shared/ui";
import { cn } from "@/shared/utils";

import { ActionButtons } from "./action-button";
import { InfoBoxes } from "./Info-Boxes";
import { PriceAction } from "./price-action";
import { StoreFilter } from "./store-filter";
import { StoreRate } from "./store-rate";

export type StoreCardProps = {
  hasFilter?: boolean;
  open?: boolean;
  blank?: boolean;
  navigation?: string;
  showStoreBtn?: boolean;
};

export function StoreCard(props: StoreCardProps) {
  const {
    hasFilter = false,
    open = false,
    navigation,
    showStoreBtn,
    blank,
  } = props;
  const [toggleInfo, setToggleInfo] = useState(open);
  const { push } = useRouter();
  const toggleAction = () => setToggleInfo(!toggleInfo);
  const searchParams = useSearchParams();
  const storeType = searchParams.get("store");

  return (
    <div className="bg-content-inverse py-2">
      {hasFilter && <StoreFilter />}
      <StoreRate toggleInfo={toggleInfo} toggleAction={toggleAction} />
      <>
        <div className={cn("bg-layout my-3 px-4 pb-5 pt-2")}>
          {toggleInfo && (
            <>
              <h4 className="text-content-primary text-headlineXSmall">
                عضویت از ۴ ماه پیش
              </h4>
              <p className="py-2 text-content-secondary text-bodySmall">
                گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
              </p>
              <ActionButtons />
            </>
          )}
        </div>
        <div className="px-4">
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <Badge variant="negative" className="py-[2px]">
              <Icon
                size={12}
                name="arrow-upward-trend"
                iconClassName="text-content-negative"
              />
              <span className="mr-[2px] text-content-negative text-bodyXSmall">
                کمترین قیمت
              </span>
            </Badge>
            <Badge variant="warning" className="px-2 py-[2px]">
              <Icon size={12} name="thunder" />
              <span className="mr-[2px] text-content-primary text-bodyXSmall">
                آگهی
              </span>
            </Badge>
            <Badge variant="positive" className="px-2 py-[2px]">
              <Icon
                size={12}
                name="spark-small-fill"
                iconClassName="text-content-positive"
              />
              <span className="mr-[2px] text-content-positive text-bodyXSmall">
                ضمانت آی‌تی بازار
              </span>
            </Badge>
          </div>
          <InfoBoxes />
          <PriceAction blank={blank} navigation={navigation} />
          {showStoreBtn && (
            <div className="py-4">
              <Button
                onClick={() =>
                  push(
                    storeType === "online"
                      ? "/online-stores"
                      : "/offline-stores",
                  )
                }
                fullWidth
                className="h-[52px] rounded-xl"
              >
                {storeType === "online"
                  ? "نمایش همه فروشگاه‌ها"
                  : " نمایش همه روی نقشه"}
              </Button>
            </div>
          )}
        </div>
      </>
    </div>
  );
}
