"use client";

import { useState } from "react";

import { Button } from "@/shared/ui";
import { BottomSheetStore, StoreMap } from "./components";

export function OfflineStoresDomain() {
  const [showStore, setShowStore] = useState<"all" | "one" | "none">("none");
  const handleToggleClick = (state: "all" | "one" | "none") =>
    setShowStore(state);

  return (
    <div className="flex h-full flex-1 flex-col justify-between">
      <StoreMap handleButtonClick={handleToggleClick} />
      {showStore === "none" ? (
        <div className="fixed bottom-0 flex w-full max-w-lg flex-col items-center justify-center rounded-t-[20px] border-t border-border-primary bg-content-inverse shadow-elevation6">
          <span className="mx-auto mt-2 h-1 w-11 rounded-md bg-surface-overlayDark/30" />
          <Button
            variant="ghost"
            onClick={() => setShowStore("all")}
            className="my-4 text-labelMedium"
          >
            {" "}
            بیش از ۲۳ فروشگاه
          </Button>
        </div>
      ) : (
        <BottomSheetStore
          showStore={showStore}
          handleToggleClick={handleToggleClick}
        />
      )}
    </div>
  );
}
