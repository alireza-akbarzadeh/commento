import { useTranslations } from 'next-intl';
import { LazyImage } from '@/shared/components';

export function Category() {
  const t = useTranslations('HomePage');
  const categoryImages = [
    { url: '/images/box.webp', name: t('brandNew') },
    { url: '/images/open-box.webp', name: t('openBox') },
    { url: '/images/worked.webp', name: t('worked') },
    { url: '/images/installment.webp', name: t('installment') },
  ];
  return (
    <section className="bg-content-inverse px-4 py-3">
      <div className="flex items-center justify-between">
        {categoryImages.map((image) => (
          <figure
            className="flex flex-col items-center gap-y-1"
            key={image.url}
          >
            <div className="flex size-[70px] h-[68px] items-center justify-center rounded-full bg-surface-secondary">
              <div className="relative size-[63px]">
                <LazyImage
                  style={{ objectFit: 'cover' }}
                  skeletonClass="rounded-full"
                  isLocal
                  quality={100}
                  src={image.url}
                  alt={image.name}
                  fill
                />
              </div>
            </div>
            <figcaption>
              <p className="text-content-primary text-labelXSmall">
                {image.name}
              </p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
