'use client';
import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';
import { Separator } from '@/shared/ui';

export function StoreAppbar() {
  const { push, back } = useRouter();
  //FIXME: Later on when we have the store id, we will change this
  const id = '123456';
  return (
    <>
      <div className="flex cursor-pointer items-center justify-between px-3 py-2">
        <div className="flex items-center gap-2">
          <div className="cursor-pointer p-2">
            <Icon name="arrow-right" onClick={back} />
          </div>
          <p className="text-content-primary text-labelMedium">
            ۱۱ فروشگاه اینترنتی
          </p>
        </div>
        <div className="flex size-10 cursor-pointer items-center justify-center rounded-xl bg-surface-tertiary p-[6px]">
          <Icon
            name="slider-horizontal"
            size="small"
            onClick={() => push(`/store/${id}`)}
          />
        </div>
      </div>
      <Separator className="border-b border-border-primary" />
    </>
  );
}
