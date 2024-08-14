"use client";

import { useRouter } from "next/navigation";
import { Icon } from "@/shared/components";

type BackButtonProps = {
  shape?: "arrow" | "cross";
};
export function BackButton(props: BackButtonProps) {
  const { shape = "arrow" } = props;
  const { back } = useRouter();
  return (
    <div className="h-[56px] px-3 py-2">
      <Icon onClick={back} name={shape === "arrow" ? "arrow-right" : "cross"} />
    </div>
  );
}
