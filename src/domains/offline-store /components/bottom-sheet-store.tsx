'use client';

import { useRef, useState } from 'react';
import { Icon, StoreCard } from '@/shared/components';
import { useIsomorphicLayoutEffect } from '@/shared/hooks';
import { useIntersectionObserver } from '@/shared/hooks/use-intersection-observer';
import { Button, Drawer, DrawerContent } from '@/shared/ui';
import { cn } from '@/shared/utils';

type BottomSheetStoreType = {
    showStore: boolean;
    handleToggleClick: () => void;
};

export function BottomSheetStore(props: BottomSheetStoreType) {
    const { showStore, handleToggleClick } = props;
    const [activeSnapPoint, setActiveSnapPoint] = useState<
        number | string | null
    >(0);
    const [isThirdCardVisible, setIsThirdCardVisible] = useState(false);
    const thirdCardRef = useRef<HTMLDivElement>(null);

    const entry = useIntersectionObserver(thirdCardRef, {
        threshold: 0.1,
        rootMargin: '0px',
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
            setActiveSnapPoint(1);
        }
    };

    const numberPfStoreList = activeSnapPoint === 0 ? 1 : 5;

    return (
        <Drawer
            open={showStore}
            onDrag={handleDrag}
            onClose={handleToggleClick}
            modal={false}
        >
            <DrawerContent
                noOverlay
                className={cn('m-auto h-auto', {
                    'm-auto h-4/5': activeSnapPoint === 1,
                    'mx-4 sm:m-auto': activeSnapPoint !== 1 && showStore,
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
                    <Button className="fixed bottom-10 left-1/2 flex h-14 -translate-x-1/2 items-center gap-2 rounded-2xl">
                        <Icon iconClassName="text-content-inverse" name="map-fill" />
                        <span>فروشگاهها روی نقشه</span>
                    </Button>
                )}
            </DrawerContent>
        </Drawer>
    );
}
