'use client';
import { FilterProduct, Icon } from '@/shared/components';
import { useQueryParams } from '@/shared/hooks';
import { Button, ScrollArea, ScrollBar } from '@/shared/ui';
import { cn } from '@/shared/utils';

export function FilterProductList() {
  const { toggleQueryParam, searchParams } = useQueryParams();

  const getActiveFilterCount = () => {
    const filterKeys = ['category', 'status', 'buy'];
    return filterKeys.reduce(
      (count, key) => count + (searchParams.has(key) ? 1 : 0),
      0,
    );
  };
  const activeFilterCount = getActiveFilterCount();

  return (
    <div className="py-2">
      <ScrollArea
        dir="rtl"
        className="relative overflow-visible whitespace-nowrap border-b border-content-inverse py-3"
      >
        <div className="flex w-max items-center gap-4 pr-4">
          <FilterProduct activeFilterCount={activeFilterCount} />
          <Button
            onClick={() => toggleQueryParam('buy')}
            variant="ghost"
            className={cn(
              'h-8 rounded-lg border border-border-primary text-bodySmall',
              {
                'border-2 border-content-primary': searchParams.has('buy'),
              },
            )}
          >
            خرید حضوری
          </Button>
          <Button
            onClick={() => toggleQueryParam('category')}
            className={cn(
              'h-8 rounded-lg border border-border-primary text-bodySmall',
              {
                'border-2 border-content-primary': searchParams.has('category'),
              },
            )}
            variant="ghost"
          >
            <span>دسته بندی</span>
            <Icon name="chevron-down" size="small" />
          </Button>
          <Button
            onClick={() => toggleQueryParam('status')}
            variant="ghost"
            className={cn(
              'h-8 rounded-lg border border-border-primary text-bodySmall',
              {
                'border-2 border-content-primary': searchParams.has('status'),
              },
            )}
          >
            وضعیت کارکرد
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
