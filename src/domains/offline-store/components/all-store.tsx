"use client";
import { AllStoreType } from "@/domains/offline-store/offline-store-types";
import { StoreCard } from "@/shared/components";
import { Drawer, DrawerContent } from "@/shared/ui";

export function AllStore(props: AllStoreType) {
  const { handleToggleClick } = props;

  return (
    <Drawer open onClose={() => handleToggleClick("none")}>
      <DrawerContent noOverlay className="h-full">
        <div className="h-full overflow-y-auto">
          {Array.from({ length: 10 }).map((_, index) => (
            <StoreCard key={index} open navigation="/offline-stores/1" />
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
