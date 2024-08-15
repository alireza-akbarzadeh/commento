"use client";

import { FilterProductList, Icon, ProductList } from "@/shared/components";
import { productList } from "@/shared/config/mock-data";
import { useQueryParams } from "@/shared/hooks";
import { Button } from "@/shared/ui";

export function ProductListDomain() {
  const { getQueryParam, replace } = useQueryParams();
  return (
    <section className="min-h-dvh bg-surface-primary py-2">
      <div className="flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-2">
          <Button
            onClick={() => replace("/")}
            variant="ghost"
            className="flex-center size-10 p-0 hover:bg-accent"
          >
            <Icon iconClassName="text-content-primary" name="arrow-right" />
          </Button>
          <h3 className="text-content-primary text-labelMedium">
            {getQueryParam("name")}
          </h3>
        </div>
        <div className="size-10">
          <Icon iconClassName="text-content-primary" name="magnifier" />
        </div>
      </div>
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
