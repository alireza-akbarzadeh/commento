"use client";

import { FilterProductList, ProductList } from "@/shared/components";
import { productList } from "@/shared/config/mock-data";

export function SearchResult() {
  return (
    <section className="min-h-dvh bg-surface-primary py-2">
      <FilterProductList />
      {productList.map((product, index) => (
        <ProductList
          key={product.latinName}
          activeBorder={index !== productList.length - 1}
          {...product}
        />
      ))}
    </section>
  );
}
