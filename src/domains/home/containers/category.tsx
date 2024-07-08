import { LazyImage } from '@/shared/components';

export function Category() {
  return (
    <section className="h-[116px] bg-surface-primary px-4 py-3">
      <div className="flex items-center justify-between">
        {Array.from({ length: 4 }).map((_, index) => (
          <div
            className="flex flex-col items-center gap-x-4 gap-y-[6px]"
            key={index}
          >
            <div className="relative size-[63px] bg-surface-secondary p-1.5">
              <LazyImage
                style={{ objectFit: 'cover', position: 'absolute' }}
                isLocal
                quality={100}
                alt=""
                src="/images/box.png"
                fill
              />
            </div>
            <p className="labelXSmall text-content-primary">آکبند</p>
          </div>
        ))}
      </div>
    </section>
  );
}
