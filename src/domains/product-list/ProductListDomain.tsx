'use client';
import { useState, useTransition } from 'react';
import {
  FilterProductList,
  NoResult,
  ProductList,
  SearchFiled,
} from '@/shared/components';
import { productList } from '@/shared/config/mock-data';
import { ResentSearch } from '../search/container';

export function ProductListDomain() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [pending, startTransition] = useTransition();
  const handleClearSearch = () => setSearchTerm('');
  const isSearchTermEmpty = searchTerm.length === 0;
  const handleInputChange = ({ value }: { value: string }) => {
    startTransition(() => {
      setSearchTerm(value);
    });
  };

  const searchResults = productList.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <section className="min-h-dvh bg-surface-primary py-2">
      <SearchFiled
        {...{
          searchTerm,
          handleInputChange,
          pending,
          isSearchTermEmpty,
          handleClearSearch,
        }}
      />
      {searchResults.length > 0 ? (
        <>
          <FilterProductList />
          {searchResults.map((product, index) => (
            <ProductList
              key={index}
              hasDiscountBadge={product.hasDiscountBadge}
              activeBorder={index !== productList.length - 1}
              loved={product.loved}
              discountLabel={product.discountLabel}
              priceRange={product.priceRange}
              storeName={product.storeName}
              title={product.title}
              imageUrl={product.imageUrl}
              info={product.info}
            />
          ))}
        </>
      ) : (
        <NoResult />
      )}
    </section>
  );
}
