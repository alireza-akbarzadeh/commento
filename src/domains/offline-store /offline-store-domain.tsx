'use client';
import { useState } from 'react';
import { BottomSheetStore, StoreMap } from './components';

export function OfflineStoresDomain() {
  const [showStore, setShowStore] = useState(false);
  const handleToggleClick = () => setShowStore(!showStore);

  return (
    <div className="flex h-full flex-1 flex-col justify-between">
      <StoreMap handleButtonClick={handleToggleClick} />
      {!showStore ? (
        <div className="fixed bottom-0 flex h-[72px] w-full max-w-lg flex-col items-center justify-center rounded-t-[20px] border-t border-border-primary bg-content-inverse shadow-elevation6">
          <span className="mx-auto mt-2 h-1 w-11 rounded-md bg-surface-overlayDark/30" />
          <p className="py-4 text-labelMedium"> بیش از ۲۳ فروشگاه</p>
        </div>
      ) : (
        <BottomSheetStore
          showStore={showStore}
          handleToggleClick={handleToggleClick}
        />
      )}
    </div>
  );
}
