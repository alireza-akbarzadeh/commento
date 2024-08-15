import { Suspense } from "react";
import { ProductListDomain } from "@/domains";

export default function ProductListPage() {
  return (
    <div id="product-list" data-testid="product-list">
      <Suspense>
        <ProductListDomain />
      </Suspense>
    </div>
  );
}
