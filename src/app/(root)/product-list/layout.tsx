import React, { PropsWithChildren } from "react";

import { BottomNavigation } from "@/shared/components";

function ProductListLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <main id="product-list" data-testid="product-list">
      {children}
      <BottomNavigation />
    </main>
  );
}

export default ProductListLayout;
