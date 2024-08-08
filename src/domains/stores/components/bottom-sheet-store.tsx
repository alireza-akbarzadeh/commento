'use client';
import { Icon, StoreCard } from '@/shared/components';
import { useScroll } from '@/shared/hooks';
import { Button, Drawer, DrawerContent, DrawerDescription } from '@/shared/ui';

type BottomSheetStoreType = {
  showStore: boolean;
};
export function BottomSheetStore(props: BottomSheetStoreType) {
  const { showStore } = props;
  const isSticky = useScroll(500);

  return (
    <Drawer open modal={false}>
      <DrawerContent
        noOverlay
        // className={`relative ${isSticky ? 'h-full' : 'h-2/3'}`}
      >
        {showStore ? (
          <>
            <StoreCard open navigation="/stores/1" />
            <StoreCard open navigation="/stores/1" hasActionButton />
            <StoreCard navigation="/stores/1" />
          </>
        ) : (
          <DrawerDescription className="py-4 text-center shadow-elevation5 text-labelMedium">
            بیش از ۲۳ فروشگاه
          </DrawerDescription>
        )}
        {isSticky && (
          <Button
            fullWidth
            className="fixed bottom-10 left-1/2 flex h-14 -translate-x-1/2 items-center gap-2 rounded-2xl"
          >
            <Icon iconClassName="text-content-inverse" name="map-fill" />
            <span>فروشگاه‌ها روی نقشه</span>
          </Button>
        )}
      </DrawerContent>
    </Drawer>
  );
}
