import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Button } from '@/shared/ui';
import { ProductCarousel } from './product-carousel';
import { ProductNavigation } from './product-navigation';

export function ProductDomain() {
  return (
    <section id="product-details-page" data-testid="product-details-page">
      <ProductNavigation />
      <ProductCarousel />
      <div className="mt-5">
        <div className="space-y-4">
          <p>گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت</p>
          <p className="text-labelMedium text-content-primary">
            <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
            <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
          <Button className="h-[52px] w-full rounded-2xl">
            <span className="text-labellarge">در ۱۱ فروشگاه</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
