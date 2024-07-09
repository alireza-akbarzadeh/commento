import { ScrollArea, ScrollBar } from '@/shared/ui';

export function ProductAttribute() {
  return (
    <ScrollArea
      dir="rtl"
      className="h-[64px] whitespace-nowrap border-b border-white bg-surface-primary"
    >
      <div className="flex w-max gap-2">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="rounded-md bg-surface-secondary p-1">
            <h4 className="px-2 text-bodyXSmall text-content-tertiary">
              {index % 2 ? 'فناوری صفحه نمایش' : 'رنگ'}
            </h4>
            <p className="px-2 text-bodyXSmall text-content-primary">
              {index % 2 ? 'AMOLED' : 'مشکی'}
            </p>
          </div>
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
