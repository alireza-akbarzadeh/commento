import { ProductListDomain } from '@/domains';
import { SearchParams } from '@/types';

export default function ProductListPage(props: SearchParams) {
  return (
    <div id={'product-list'}>
      <ProductListDomain />
    </div>
  );
}
