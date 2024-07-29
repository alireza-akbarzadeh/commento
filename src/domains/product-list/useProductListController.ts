'use client';

import { useMemo } from 'react';
import { productList } from '@/shared/config/mock-data';
import { useSearchController } from '@/shared/hooks';

export function useProductListController() {
  const { handleClearSearch, handleInputChange, searchTerm } =
    useSearchController({ use: 'state' });
  const searchResults = useMemo(() => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return {
    searchResults,
    searchTerm,
    handleInputChange,
    handleClearSearch,
  };
}
