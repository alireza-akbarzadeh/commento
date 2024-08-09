import { ProductListDomain } from '@/domains';

export default function ProductListPage() {
  return (
    <div id="product-list" data-testid="product-list">
      <ProductListDomain />
    </div>
  );
}
