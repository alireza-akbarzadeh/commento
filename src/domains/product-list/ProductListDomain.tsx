'use client';

import {
  FilterProductList,
  NoResult,
  ProductList,
  SearchFiled,
} from '@/shared/components';
import { useProductListController } from './useProductListController';

export function ProductListDomain() {
  const {
    handleClearSearch,
    handleInputChange,
    pending,
    searchResults,
    searchTerm,
  } = useProductListController();

  return (
    <section className="min-h-dvh bg-surface-primary py-2">
      <SearchFiled
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        pending={pending}
        isSearchTermEmpty={searchTerm.length === 0}
        handleClearSearch={handleClearSearch}
      />
      {searchResults.length > 0 ? (
        <>
          <FilterProductList />
          {searchResults.map((product, index) => (
            <ProductList
              key={product.title} // Assuming each product has a unique ID
              hasDiscountBadge={product.hasDiscountBadge}
              activeBorder={index !== searchResults.length - 1}
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
