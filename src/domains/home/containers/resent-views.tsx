import { ProductSwipe } from '@/shared/components';
import { products } from '@/shared/config';

export function ResentViews() {
  return (
    <section id="recent-view" data-testid="resent-view">
      <ProductSwipe data={products} />
    </section>
  );
}
