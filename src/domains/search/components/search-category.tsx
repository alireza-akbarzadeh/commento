import { Icon } from '@/shared/components';
import {
  Button,
  ScrollArea,
  ScrollBar,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui';

export function SearchCategory() {
  return (
    <div className="py-2">
      <ScrollArea dir="rtl" className="whitespace-nowrap border-b border-white">
        <div className="flex w-max gap-4">
          <div className="flex size-[40px] items-center justify-center rounded-full border border-border-primary bg-surface-tertiary">
            <Icon
              name="slider-horizontal"
              style={{ width: '16px', height: '14px' }}
            />
          </div>
          <Button
            variant="ghost"
            className="w-[126px] border border-border-primary"
          >
            خرید حضوری
          </Button>
          <Select dir="rtl">
            <SelectTrigger className="w-[126px] border-border-primary px-4 py-2">
              <SelectValue placeholder="دسته بندی" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="apple">موبایل</SelectItem>
                <SelectItem value="banana">جارو</SelectItem>
                <SelectItem value="blueberry">لب تاب</SelectItem>
                <SelectItem value="grapes">تبلت</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <Button
            variant="ghost"
            className="w-[126px] border border-border-primary"
          >
            وضعیت کارکرد
          </Button>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
