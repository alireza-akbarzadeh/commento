"use client";

import { useRef, useState } from "react";

import { BottomSheetStoreType } from "@/domains/offline-store/offline-store-types";
import { useIsomorphicLayoutEffect } from "@/shared/hooks";
import { useIntersectionObserver } from "@/shared/hooks/use-intersection-observer";

type UseBottomSheetControllerArgs = BottomSheetStoreType;

export function useBottomSheetController(props: UseBottomSheetControllerArgs) {
  const { drawerAction, handleToggleClick } = props;
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
      handleToggleClick("drag");
    }
  };

  const numberPfStoreList = drawerAction === "one" ? 1 : 5;

  return { numberPfStoreList, handleDrag, isThirdCardVisible, thirdCardRef };
}
