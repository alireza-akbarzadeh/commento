'use client';

import { useParams } from 'next/navigation';
import { useEffect, useMemo, useState, useTransition } from 'react';
import { productList } from '@/shared/config/mock-data';

export function useProductListController() {
  const { slug } = useParams();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pending, startTransition] = useTransition();

  useEffect(() => {
    let pickTitle: string = '';
    if (slug) {
      pickTitle =
        productList.find((product) => product.latinName === slug)?.title || '';
      setSearchTerm(pickTitle);
    }
  }, [slug]);

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
