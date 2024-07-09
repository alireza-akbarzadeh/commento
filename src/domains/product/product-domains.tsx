import { ScrollArea } from '@radix-ui/react-scroll-area';
import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Badge, Button, ScrollBar, Separator } from '@/shared/ui';
import {
  ProductActions,
  ProductAttribute,
  ProductCarousel,
  ProductNavigation,
} from './components';

// TODO
// در صورتی که کانفیگی تنوع نداشته باشد قابل کلیک نمیباشد و اگر داشت کلیک مییشه و باتم شیت باز میشه- با کلیک رویی کانفیگ جدید صفحه PDP رفرش میشه

export function ProductDomain() {
  return (
    <section id="product-details-page" data-testid="product-details-page">
      <ProductNavigation />
      <ProductCarousel />
      <div className="py-2">
        <div className="space-y-4 px-4">
          {/* product details */}
          <p className="text-headlineXSmall text-content-primary">
            گوشی موبایل اپل مدل iPhone 13 CH دو سیم‌ کارت
          </p>
          <p className="text-labelMedium text-content-primary">
            <span className="text-bodyXXSmall">از</span> ۱‍۶۷,۰۰۰
            <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
          </p>
          <ProductAttribute />
          {/* action button */}
          <div className="py-4">
            <Button className="h-[52px] w-full rounded-2xl text-labellarge text-content-inverse">
              در ۱۱ فروشگاه
            </Button>
          </div>
          {/* product benchmark */}
          <div className="flex items-center justify-between py-2">
            <div className="flex flex-col items-center">
              <Icon name="sticky-note" size="small" />
              <p className="text-labelXSmall text-content-primary">
                مشخصات فنی
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
            />
            <div className="flex flex-col items-center">
              <Badge variant="positive">۴.۳</Badge>
              <p className="text-labelXSmall text-content-primary">نمره تست</p>
            </div>
            <Separator
              orientation="vertical"
              className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
            />
            <div className="flex flex-col items-center">
              <Icon name="slider-horizontal" size="small" />
              <p className="text-labelXSmall text-content-primary">
                نمودار قیمت
              </p>
            </div>
          </div>
          <div className="">
            <p className="text-labelMedium text-content-primary">
              ۱۱ فروشگاه اینترنتی
            </p>
          </div>
          <ProductActions />
          <div>
            <div className="flex items-center gap-1.5">
              <p className="text-labelSmall text-content-primary">دیجیاتو</p>
              <span className="text-bodySmall text-content-positive">۴.۵</span>
              <Icon name="chevron-up" />
            </div>
            <p className="text-bodySmall text-content-tertiary">
              تهران - اینترنتی
            </p>
            <div className="flex items-center gap-2">
              <Badge
                variant="negative"
                className="text-bodyXSmall text-content-negative"
              >
                کمترین قیمت
              </Badge>
              <Badge
                variant="warning"
                className="text-bodyXSmall text-content-primary"
              >
                آگهی
              </Badge>
              <Badge
                variant="positive"
                className="text-bodyXSmall text-content-positive"
              >
                ضمانت آی‌تی بازار
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
