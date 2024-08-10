'use client';
import { useState } from 'react';
import { Icon, StoreCard } from '@/shared/components';
import { useScroll } from '@/shared/hooks';
import { Button, Drawer, DrawerContent } from '@/shared/ui';

type BottomSheetStoreType = {
    showStore: boolean;
    handleToggleClick: () => void
};

export function BottomSheetStore(props: BottomSheetStoreType) {
    const { showStore, handleToggleClick } = props;
    const isSticky = useScroll(500);
    const [activeSnapPoint, setActiveSnapPoint] = useState<number | string | null>(1); // Default to full height

    const handleDrag = (_event: React.PointerEvent<HTMLDivElement>, percentageDragged: number) => {
        console.log({ percentageDragged });

        // If dragged more than 33% up the screen, snap to 2/3 height
        if (percentageDragged > 0.33 && activeSnapPoint !== 0.67) {
            setActiveSnapPoint(0.67);
        } else if (percentageDragged <= 0.33 && activeSnapPoint !== 1) {
            setActiveSnapPoint(1); // Full height
        }
    };

    return (
        <Drawer
            open={showStore}
            onClose={handleToggleClick}
            modal={false}
        >
            <DrawerContent
                noOverlay
                className={`${showStore ? "mx-4 sm:m-auto" : ""} ${'h-4/5'} `}
            >
                <StoreCard open navigation="/stores/1" />
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
