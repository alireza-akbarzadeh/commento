import { ProductSwipe } from '@/shared/components';
import { products } from '@/shared/config';

export function SimilarProduct({ title }: { title: string }) {
  return (
    <section id="recent-view" data-testid="resent-view">
      <div className="bg-content-inverse py-2">
        <ProductSwipe title={title} data={products} />
      </div>
    </section>
  );
}
