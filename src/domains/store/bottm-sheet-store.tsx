'use client';
import { StoreCard } from '@/shared/components';
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerPortal,
} from '@/shared/ui';

export function BottomSheetStore({ showStore }: { showStore: boolean }) {
  return (
    <Drawer open>
      <DrawerPortal>
        <DrawerContent noOverlay className="fixed inset-x-0 bottom-0">
          {showStore ? (
            <StoreCard />
          ) : (
            <DrawerDescription className="py-4 text-center shadow-elevation5 text-labelMedium">
              بیش از ۲۳ فروشگاه
            </DrawerDescription>
          )}
        </DrawerContent>
      </DrawerPortal>
    </Drawer>
  );
}
