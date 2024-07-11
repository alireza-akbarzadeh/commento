import { Separator } from '@/shared/ui';
import { PriceNotify } from './price-notify/price-notify';
import { SpecificTech } from './specific/specific-tech';
import { TestScore } from './test-score/test-score';

export function ProductInfo() {
  return (
    <div className="flex items-center justify-between py-2">
      <SpecificTech />
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <TestScore />
      <Separator
        orientation="vertical"
        className="h-[40px] border-[0.6px] border-border-primary text-displaySmall"
      />
      <PriceNotify />
    </div>
  );
}
