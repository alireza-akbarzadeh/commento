"use client";

import { useBottomSheetController } from "@/domains/offline-store/hooks/useBottomSheetController";
import { BottomSheetStoreType } from "@/domains/offline-store/offline-store-types";
import { Icon, StoreCard } from "@/shared/components";
import { Button, Drawer, DrawerContent } from "@/shared/ui";
import { cn } from "@/shared/utils";
import { AllStore } from "./all-store";

export function BottomSheetStore(props: BottomSheetStoreType) {
  const { drawerAction, handleToggleClick } = props;
  const { handleDrag, isThirdCardVisible, numberPfStoreList, thirdCardRef } =
    useBottomSheetController({ drawerAction, handleToggleClick });

  if (drawerAction === "all") {
    return <AllStore handleToggleClick={handleToggleClick} />;
  }

  return (
    <Drawer
      open={drawerAction === "one" || drawerAction === "drag"}
      onDrag={handleDrag}
      onClose={() => handleToggleClick("none")}
      modal={false}
    >
      <DrawerContent
        noOverlay
        className={cn("m-auto h-auto", {
          "m-auto h-4/5": drawerAction === "drag",
          "m-auto max-w-sm sm:max-w-md": drawerAction === "one",
        })}
      >
        <div ref={thirdCardRef} className="h-full overflow-y-auto">
          {Array.from({ length: numberPfStoreList }).map((_, index) => (
            <div key={index} ref={index >= 2 ? thirdCardRef : null}>
              <StoreCard open navigation="/offline-stores/1" />
            </div>
          ))}
        </div>
        {isThirdCardVisible && (
          <Button
            onClick={() => handleToggleClick("none")}
            className="fixed bottom-10 left-1/2 flex h-14 -translate-x-1/2 items-center gap-2 rounded-2xl"
          >
            <Icon iconClassName="text-content-inverse" name="map-fill" />
            <span>فروشگاهها روی نقشه</span>
          </Button>
        )}
      </DrawerContent>
    </Drawer>
  );
}
