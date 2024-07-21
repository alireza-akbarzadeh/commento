import { ProductSwipe } from '@/shared/components';
import { products } from '@/shared/config';

export function SimilarProduct({ title }: { title: string }) {
  return (
    <section id="recent-view" data-testid="resent-view">
      <ProductSwipe title={title} data={products} />
    </section>
  );
}
