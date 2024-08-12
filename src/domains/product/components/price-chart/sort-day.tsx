"use client";

import { useEffect } from "react";

import { useQueryParams } from "@/shared/hooks";
import { Button } from "@/shared/ui";

export function SortDay() {
  const { searchParams, pathname, replace, appendQueryParam, getQueryParam } =
    useQueryParams();
  const activeState = (
    value: "monthly" | "threeMonth" | "sixMonth" | "yearly",
  ): boolean => getQueryParam("chart") === value;

  useEffect(() => {
    if (!searchParams.get("chart")) {
      const params = new URLSearchParams(searchParams);
      params.set("chart", "monthly");
      replace(`${pathname}?${params.toString()}`);
    }
  }, [searchParams, pathname, replace]);

  return (
    <div className="flex items-center gap-3 py-2">
      <Button
        className={activeState("monthly") ? "border-2 border-black" : ""}
        onClick={() =>
          appendQueryParam({
            key: "chart",
            value: "monthly",
            options: { scroll: false },
          })
        }
        fullWidth
        variant="outline"
      >
        ماهانه
      </Button>
      <Button
        className={activeState("threeMonth") ? "border-2 border-black" : ""}
        onClick={() =>
          appendQueryParam({
            key: "chart",
            value: "threeMonth",
            options: { scroll: false },
          })
        }
        fullWidth
        variant="outline"
      >
        ۳ ماهه
      </Button>
      <Button
        className={activeState("sixMonth") ? "border-2 border-black" : ""}
        onClick={() =>
          appendQueryParam({
            key: "chart",
            value: "sixMonth",
            options: { scroll: false },
          })
        }
        fullWidth
        variant="outline"
      >
        ۶ ماهه
      </Button>
      <Button
        className={activeState("yearly") ? "border-2 border-black" : ""}
        onClick={() =>
          appendQueryParam({
            key: "chart",
            value: "yearly",
            options: { scroll: false },
          })
        }
        fullWidth
        variant="outline"
      >
        سالانه
      </Button>
    </div>
  );
}
