import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function Categories() {
  return (
    <section className="my-6" style={{ padding: '8px, 0px, 16px, 0px' }}>
      <h3 className="px-4 pt-2 text-labellarge">دسته‌بندی‌ها</h3>
      <div className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="my-2 flex gap-3" key={index}>
            <Button
              variant="ghost"
              className="flex w-full justify-between rounded-lg bg-surface-secondary"
            >
              <div className="flex items-center gap-[5.6px]">
                <Icon name="default" size="xxSmall" />
                <p className="text-xs font-medium text-content-primary">
                  گوشی تلفن
                </p>
              </div>
              <Icon name="chevron-left" size="xSmall" />
            </Button>
            <Button
              variant="ghost"
              className="flex w-full justify-between rounded-lg bg-surface-secondary"
            >
              <div className="flex items-center gap-[5.6px]">
                <Icon name="default" size="xxSmall" />
                <p className="text-labelXSmall text-content-primary">
                  گوشی تلفن
                </p>
              </div>
              <Icon name="chevron-left" size="xSmall" />
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
}
