'use client';
import { useTranslations } from 'next-intl';
import { Icon } from '@/shared/components';
import { useQueryParams } from '@/shared/hooks';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/shared/ui';
import { cn } from '@/shared/utils';
import { FilterContent } from './filter-content';

type FilterProductProps = {
  activeFilterCount: number;
};

export function FilterProduct(props: FilterProductProps) {
  const { activeFilterCount } = props;
  const t = useTranslations('Globals');
  const { clearQueryParams } = useQueryParams();

  return (
    <Drawer>
      <DrawerTrigger className="relative">
        <div
          className={cn(
            'flex h-8 w-8 items-center justify-center rounded-xl bg-surface-tertiary p-2',
            {
              'border-2 border-content-primary': Boolean(activeFilterCount),
            },
          )}
        >
          {activeFilterCount > 0 && (
            <div className="absolute -left-2 top-0 flex size-[18px] items-center justify-center rounded-full bg-content-primary text-xs text-content-inverse">
              {activeFilterCount}
            </div>
          )}
          <Icon name="slider-horizontal" size="small" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none pb-4">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerTitle className="text-headlineSmall">
            {t('filters')}
          </DrawerTitle>
          <DrawerClose>
            <div className="flex-center size-8 rounded-full bg-surface-tertiary">
              <Icon size="small" name="cross" />
            </div>
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription />
        <div className="flex h-full flex-col justify-between">
          <FilterContent />
          <div className="mb-2 flex items-center justify-between gap-3 px-4">
            <Button
              fullWidth
              className="h-[52px] rounded-xl py-3 text-labellarge"
            >
              مشاهده نتایج
            </Button>
            <DrawerClose
              onClick={() => clearQueryParams()}
              className="h-[52px] w-full rounded-xl py-3 text-labellarge"
            >
              حذف فیلتر‌ها
            </DrawerClose>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
