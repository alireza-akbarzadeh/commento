'use client';
import { useState } from 'react';
import { BottomSheetStore } from './bottm-sheet-store';
import { StoreMap } from './store-map';

export default function StoreDetails() {
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
