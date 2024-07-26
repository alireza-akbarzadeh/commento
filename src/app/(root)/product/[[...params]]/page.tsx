import { ProductDomain } from '@/domains/product/product-domains';

type ProductPageType = {
  params: string[];
};

export default function ProductDetailsPage(props: { params: ProductPageType }) {
  const { params } = props.params;
  const id = params[0];

  return (
    <div id={id}>
      <ProductDomain />
    </div>
  );
}
