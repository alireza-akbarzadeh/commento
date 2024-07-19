import { useTranslations } from 'next-intl';
import { LazyImage } from '@/shared/components';

export function Category() {
  const t = useTranslations('HomePage');
  const categoryImages = [
    { url: '/images/box.png', name: t('brandNew') },
    { url: '/images/open-box.png', name: t('openBox') },
    { url: '/images/worked.png', name: t('worked') },
    { url: '/images/installment.png', name: t('installment') },
  ];
  return (
    <section className="bg-content-inverse px-4 py-3">
      <div className="flex items-center justify-between">
        {categoryImages.map((image) => (
          <div className="flex flex-col items-center gap-y-1" key={image.url}>
            <div className="flex size-[70px] h-[68px] items-center justify-center rounded-full bg-surface-secondary">
              <div className="relative size-[63px]">
                <LazyImage
                  style={{ objectFit: 'cover' }}
                  isLocal
                  quality={100}
                  src={image.url}
                  alt={image.name}
                  fill
                />
              </div>
            </div>
            <p className="labelXSmall text-content-primary">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
