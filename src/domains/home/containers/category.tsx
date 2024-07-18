import { LazyImage } from '@/shared/components';

const categoryImages = [
  { url: '/images/box.png', name: 'آکبند' },
  { url: '/images/open-box.png', name: 'اوپن باکس' },
  { url: '/images/worked.png', name: 'کار‌کرده' },
  { url: '/images/installment.png', name: 'قسطی' },
];

export function Category() {
  return (
    <section className="px-4 py-3">
      <div className="flex items-center justify-between">
        {categoryImages.map((image) => (
          <div
            className="flex h-[68] w-[70px] flex-col items-center gap-y-1"
            key={image.url}
          >
            <div className="relative size-[63px] rounded-full bg-surface-secondary p-1.5">
              <LazyImage
                style={{ objectFit: 'cover' }}
                isLocal
                quality={100}
                src={image.url}
                alt={image.name}
                fill
              />
            </div>
            <p className="labelXSmall text-content-primary">{image.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
