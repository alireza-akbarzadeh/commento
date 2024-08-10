'use client';
import { useState } from 'react';
import { Icon, StoreCard } from '@/shared/components';
import { useScroll } from '@/shared/hooks';
import { Button, Drawer, DrawerContent } from '@/shared/ui';
import { cn } from '@/shared/utils';

type BottomSheetStoreType = {
  showStore: boolean;
  handleToggleClick: () => void;
};

export function BottomSheetStore(props: BottomSheetStoreType) {
  const { showStore, handleToggleClick } = props;
  //Fixme: check why scrolling is not working
  const isSticky = useScroll(60);
  const [activeSnapPoint, setActiveSnapPoint] = useState<
    number | string | null
  >(0);

  const handleDrag = (
    _event: React.PointerEvent<HTMLDivElement>,
    percentageDragged: number,
  ) => {
    if (percentageDragged > 0.0033) {
      setActiveSnapPoint(1);
    }
  };
  const numberPfStoreList = activeSnapPoint === 0 ? 1 : 5;

  console.log({ isSticky });

  return (
    <Drawer
      open={showStore}
      onClose={handleToggleClick}
      onDrag={handleDrag}
      modal={false}
    >
      <DrawerContent
        noOverlay
        className={cn('m-auto h-auto', {
          'm-auto h-4/5': activeSnapPoint === 1,
          'mx-4 sm:m-auto': activeSnapPoint !== 1 && showStore,
        })}
      >
        <div className="overflow-x-auto">
          {Array.from({ length: numberPfStoreList }).map((_, index) => (
            <StoreCard key={index} open navigation="/stores/1" />
          ))}
        </div>
        {isSticky && (
          <Button className="fixed bottom-10 left-1/2 flex h-14 -translate-x-1/2 items-center gap-2 rounded-2xl">
            <Icon iconClassName="text-content-inverse" name="map-fill" />
            <span>فروشگاه‌ها روی نقشه</span>
          </Button>
        )}
      </DrawerContent>
    </Drawer>
  );
}
