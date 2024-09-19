import { useTranslations } from "next-intl";

import { Icon } from "@/shared/components";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  useToast,
} from "@/shared/ui";
import { PriceNotify } from "./price-notify";

export function MoreDrawer() {
  const t = useTranslations("Product");
  const { toast } = useToast();

  const handleShare = () => {
    if (typeof window === "undefined") return;
    const url = window.location.href;
    if (navigator.share) {
      return navigator.share({
        url,
        title: "Check out this product",
        text: "I found this great product!",
      });
    } else if (navigator.clipboard) {
      return navigator.clipboard
        .writeText(url)
        .then(() => toast({ title: "لینک کپی شد" }))
        .catch(() => {
          return toast({ title: "مشکلی پیش آمده است" });
        });
    }
    return toast({ title: "'مشکلی پیش آمده است'" });
  };

  return (
    <Drawer>
      <DrawerTrigger>
        <div className="size-10 pl-2.5">
          <Icon
            iconClassName="text-content-primary"
            name="more-vertical-fill"
            size="medium"
          />
        </div>
      </DrawerTrigger>
      <DrawerContent className="pb-6">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-headlineSmall">
            اطلاع از قیمت مدنظر
          </DrawerTitle>
          <DrawerClose className="size-8 rounded-full bg-surface-tertiary">
            <Icon size="small" name="cross" />
          </DrawerClose>
        </DrawerHeader>
        {/* TOOD: check what when this not exist we get waning in console due to missing arial labe description */}
        <DrawerDescription />
        <div className="flex items-center px-5 py-3">
          <Icon name="share" />
          <Button
            onClick={handleShare}
            variant="ghost"
            className="text-labelMedium"
          >
            {t("sharedProduct")}
          </Button>
        </div>
        <div className="flex items-center px-5 py-3">
          <Icon name="bell" />
          <Button variant="ghost" className="text-labelMedium">
            {t("notifiedPriced")}
          </Button>
        </div>
        <div className="flex items-center px-5 py-3">
          <Icon name="default" />
          <Button variant="ghost" className="text-labelMedium">
            {t("faq")}
          </Button>
        </div>
        <PriceNotify />
      </DrawerContent>
    </Drawer>
  );
}
