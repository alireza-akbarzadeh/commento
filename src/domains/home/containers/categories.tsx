import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function Categories() {
  return (
    <section className="mt- mb-[64px]">
      <h3 className="px-3 py-2 text-lg font-semibold">دسته‌بندی‌ها</h3>
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
                <p className="text-xs font-medium text-content-primary">
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
