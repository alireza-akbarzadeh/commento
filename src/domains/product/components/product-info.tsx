import { Icon } from '@/shared/components';
import { Badge, Separator } from '@/shared/ui';
import { SpecificTech } from './specific-tech';

export function ProductInfo() {
  return (
    <div className="flex items-center justify-between py-2">
      <SpecificTech />
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <div className="flex flex-col items-center">
        <Badge variant="positive">۴.۳</Badge>
        <p className="text-labelXSmall text-content-primary">نمره تست</p>
      </div>
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <div className="flex flex-col items-center">
        <Icon name="slider-horizontal" size="small" />
        <p className="text-labelXSmall text-content-primary">نمودار قیمت</p>
      </div>
    </div>
  );
}
