import React from "react";

import { Icon } from "@/shared/components";

export function FAQ() {
  return (
    <div className="my-2 bg-content-inverse py-2">
      <div className="flex w-full items-center px-4">
        <h3 className="text-content-primary text-labellarge">
          پرسش و پاسخ‌ها
          <span className="mr-1 text-[#636366]">(۲۳)</span>
        </h3>
        <Icon name="chevron-left" size="small" />
      </div>
    </div>
  );
}
