import React from "react";
import { Label } from "@/shared/ui";

type CompareCategoryProps = {
  title: string;
  value: string;
};

export function CompareCategory(props: CompareCategoryProps) {
  const { title, value } = props;

  return (
    <div className="flex flex-col items-center justify-center gap-[2px] border border-border-primary p-4">
      <Label className="text-center text-content-tertiary text-bodySmall">
        {title}
      </Label>
      <p className="text-center text-content-primary text-labelSmall">
        {value}
      </p>
    </div>
  );
}
