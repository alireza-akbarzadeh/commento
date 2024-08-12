"use client";

import {
  FilterProductList,
  NoResult,
  ProductList,
  SearchFiled,
} from "@/shared/components";

import { useProductListController } from "./useProductListController";

export function ProductListDomain() {
  const { handleClearSearch, handleInputChange, searchResults, searchTerm } =
    useProductListController();

  return (
    <section className="min-h-dvh bg-surface-primary py-2">
      <SearchFiled
        searchTerm={searchTerm}
        handleInputChange={handleInputChange}
        isSearchTermEmpty={searchTerm.length === 0}
        handleClearSearch={handleClearSearch}
      />
      {searchResults.length > 0 ? (
        <>
          <FilterProductList />
          {searchResults.map((product, index) => (
            <ProductList
              key={product.latinName}
              activeBorder={index !== searchResults.length - 1}
              {...product}
            />
          ))}
        </>
      ) : (
        <NoResult />
      )}
    </section>
  );
}
