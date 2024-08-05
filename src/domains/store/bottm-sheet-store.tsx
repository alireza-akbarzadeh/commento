'use client';
import { StoreCard } from '@/shared/components';
import { Drawer, DrawerContent, DrawerDescription } from '@/shared/ui';

export function BottomSheetStore({ showStore }: { showStore: boolean }) {
  return (
    <Drawer open modal={false}>
      <DrawerContent noOverlay>
        {showStore ? (
          <>
            <StoreCard />
            <StoreCard open />
            <StoreCard />
          </>
        ) : (
          <DrawerDescription className="py-4 text-center shadow-elevation5 text-labelMedium">
            بیش از ۲۳ فروشگاه
          </DrawerDescription>
        )}
      </DrawerContent>
    </Drawer>
  );
}
