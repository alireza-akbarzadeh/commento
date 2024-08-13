"use client";

import { useRef, useState } from "react";

import { Icon, StoreCard } from "@/shared/components";
import { useIsomorphicLayoutEffect } from "@/shared/hooks";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";
import { Button, Drawer, DrawerContent } from "@/shared/ui";
import { cn } from "@/shared/utils";

type BottomSheetStoreType = {
  showStore: "all" | "one" | "none";
  handleToggleClick: (state: "all" | "one" | "none") => void;
};

export function BottomSheetStore(props: BottomSheetStoreType) {
  const { showStore, handleToggleClick } = props;
  const [isThirdCardVisible, setIsThirdCardVisible] = useState(false);
  const thirdCardRef = useRef<HTMLDivElement>(null);

  const entry = useIntersectionObserver(thirdCardRef, {
    threshold: 0.1,
    rootMargin: "0px",
  });

  useIsomorphicLayoutEffect(() => {
    if (entry?.isIntersecting) {
      setIsThirdCardVisible(true);
    } else {
      setIsThirdCardVisible(false);
    }
  }, [entry]);

  const handleDrag = (
    _event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => {
    if (percentageDragged > 0.0033) {
      handleToggleClick("all");
    }
  };

  const numberPfStoreList = showStore === "one" ? 1 : 5;

  return (
    <Drawer
      open={showStore === "all" || showStore === "one"}
      onDrag={handleDrag}
      onClose={() => handleToggleClick("none")}
      modal={false}
    >
      <DrawerContent
        noOverlay
        className={cn("m-auto h-auto", {
          "m-auto h-4/5": showStore === "all",
          "mx-4 sm:m-auto": showStore === "one",
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
