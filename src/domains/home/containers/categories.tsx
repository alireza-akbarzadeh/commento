import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function Categories() {
  return (
    <section className="h-[264px]">
      <h3 className="px-4 pt-4 text-lg font-semibold">دسته‌بندی‌ها</h3>
      <div className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="mt-5 flex gap-[22px] px-4" key={index}>
            <Button variant="ghost" className="flex w-full justify-between p-0">
              <div className="flex items-center gap-[5.6px]">
                <Icon name="default" size="xxSmall" />
                <p className="text-xs font-medium text-content-primary">
                  گوشی تلفن
                </p>
              </div>
              <Icon name="chevron-left" size="xSmall" />
            </Button>
            <Button variant="ghost" className="flex w-full justify-between p-0">
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
