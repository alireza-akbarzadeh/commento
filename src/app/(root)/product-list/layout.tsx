import React, { PropsWithChildren } from "react";

import { BottomNavigation } from "@/shared/components";

function ProductListLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <main
      id="product-list"
      data-testid="product-list"
      className="bg-content-inverse"
    >
      {children}
      <BottomNavigation />
    </main>
  );
}

export default ProductListLayout;
