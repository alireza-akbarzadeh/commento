'use client';
import { useState } from 'react';

import { BottomSheetStore } from './bottom-sheet-store';
import { StoreMap } from './store-map';

export function OfflineStores() {
  const [showStore, setShowStore] = useState(false);
  const handleButtonClick = () => setShowStore(!showStore);

  return (
    <>
      <StoreMap handleButtonClick={handleButtonClick} />
      <BottomSheetStore showStore={showStore} />
    </>
  );
}
