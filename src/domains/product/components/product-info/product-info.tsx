import { TestScore } from "@/shared/components";
import { Separator } from "@/shared/ui";

import { SpecificTech } from "./specific/specific-tech";
import { UserComment } from "./user-comment/user-comment";

export function ProductInfo() {
  return (
    <div className="flex items-center justify-around gap-3 px-4 py-2">
      <SpecificTech />
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <TestScore />
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <UserComment />
    </div>
  );
}
