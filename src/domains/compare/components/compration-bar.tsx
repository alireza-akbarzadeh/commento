"use client";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import React from "react";
import { Icon } from "@/shared/components";
import { Button } from "@/shared/ui";

export const ComprationBar = () => {
  const { back } = useRouter();
  const t = useTranslations("Compration");
  return (
    <div className="flex items-center gap-2 px-4 py-[14px]">
      <Button
        onClick={() => back()}
        variant="unStyled"
        className="mt-[2px] p-2"
      >
        <Icon name="cross" />
      </Button>
      <h3 className="text-content-primary text-labelMedium">
        {t("comprationProduct")}
      </h3>
    </div>
  );
};
