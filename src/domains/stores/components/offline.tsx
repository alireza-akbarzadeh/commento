'use client';
import { useState } from 'react';

import { BottomSheetStore } from './bottom-sheet-store';
import { StoreMap } from './store-map';

export function OfflineStores() {
  const [showStore, setShowStore] = useState(false);

  const handleButtonClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowStore((prevState) => !prevState);
  };

  return (
    <>
      <StoreMap handleButtonClick={handleButtonClick} />
      <BottomSheetStore showStore={showStore} />
    </>
  );
}
