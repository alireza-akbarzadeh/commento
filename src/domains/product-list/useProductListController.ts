'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';
import { productList } from '@/shared/config/mock-data';

export function useProductListController() {
  const searchParams = useSearchParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pending, startTransition] = useTransition();
  const query = searchParams.get('query');
  useEffect(() => {
    if (query) {
      setSearchTerm(query);
    }
  }, [query]);

  const handleClearSearch = () => setSearchTerm('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    startTransition(() => {
      setSearchTerm(event.target.value);
    });
  };

  const searchResults = useMemo(() => {
    return productList.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }, [searchTerm]);

  return {
    searchResults,
    pending,
    searchTerm,
    handleInputChange,
    handleClearSearch,
  };
}
