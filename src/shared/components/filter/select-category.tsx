import { useTranslations } from "next-intl";
import React from "react";
import { useQueryParams } from "@/shared/hooks";
import {
  Button,
  Checkbox,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/shared/ui";
import { Icon } from "../icons";

type toggleSheetProps = {
  onClose: () => void;
};

export const SelectCategory = (props: toggleSheetProps) => {
  const { onClose } = props;
  const globalMsg = useTranslations("Globals");
  const homeMsg = useTranslations("HomePage");
  const { appendQueryParam, getQueryParam } = useQueryParams();

  return (
    <Drawer onClose={onClose} open>
      <DrawerContent onClickOverlay={onClose} className="pb-6">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-headlineSmall">
            {globalMsg("selectTheSubject")}
          </DrawerTitle>
          <Button
            onClick={onClose}
            className="size-8"
            variant="tertiary"
            roundedFull
          >
            <Icon size="small" name="cross" />
          </Button>
        </DrawerHeader>
        <div className="mt-3 flex flex-col gap-4 px-[25px]">
          <div className="flex items-center justify-between">
            <p className="text-content-primary text-labelMedium">
              {homeMsg("worked")}
            </p>
            <Checkbox
              checked={getQueryParam("category") === "worked"}
              onCheckedChange={() =>
                appendQueryParam({ key: "category", value: "worked" })
              }
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-content-primary text-labelMedium">
              {globalMsg("new")}
            </p>
            <Checkbox
              checked={getQueryParam("category") === "new"}
              onCheckedChange={() =>
                appendQueryParam({ key: "category", value: "new" })
              }
              className="rounded-full"
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="text-content-primary text-labelMedium">
              {homeMsg("openBox")}
            </p>
            <Checkbox
              checked={getQueryParam("category") === "openBox"}
              onCheckedChange={() =>
                appendQueryParam({ key: "category", value: "openBox" })
              }
              className="rounded-full"
            />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};
