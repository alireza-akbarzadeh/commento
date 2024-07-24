'use client';
import { useState, useTransition } from 'react';
import { productList } from '@/shared/config/mock-data';
import { NoResult } from './components/no-result';
import { SearchCategory } from './components/search-category';
import { SearchFiled } from './components/search-filed';
import { ResentSearch } from './container/recent-search';
import { SearchProduct } from './container/search-product';

export function SearchDomian() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  // use it for showing pending loading
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
    <section
      id="search"
      data-testid="search"
      className="min-h-dvh bg-surface-primary py-2"
    >
      <SearchFiled
        {...{
          searchTerm,
          handleInputChange,
          pending,
          isSearchTermEmpty,
          handleClearSearch,
        }}
      />
      {isSearchTermEmpty ? (
        <ResentSearch />
      ) : searchResults.length > 0 ? (
        <>
          <SearchCategory />
          {productList.map((product, index) => (
            <SearchProduct
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
