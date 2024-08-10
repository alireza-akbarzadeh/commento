'use client';
import { useState } from 'react';

import { BottomSheetStore } from './bottom-sheet-store';
import { StoreMap } from './store-map';

export function OfflineStores() {
    const [showStore, setShowStore] = useState(false);
    const handleToggleClick = () => setShowStore(!showStore);

    return (
        <div className='flex justify-between flex-col flex-1 h-full'>
            <StoreMap handleButtonClick={handleToggleClick} />
            {!showStore ? (
                <div className='bg-content-inverse shadow-elevation6 border-t border-border-primary fixed bottom-0 max-w-lg
 rounded-t-[20px]  w-full h-[72px] flex flex-col items-center justify-center'>
                    <span className='bg-surface-overlayDark/30 rounded-md  w-11 h-1  mx-auto mt-2' />
                    <p className='py-4 text-labelMedium'> بیش از ۲۳ فروشگاه</p>
                </div>
            ) : (
                <BottomSheetStore showStore={showStore} handleToggleClick={handleToggleClick} />
            )}
        </div>
    );
}
