'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FilterActions } from '@/domains/product/components/filters/filter-actions';
import { Icon } from '@/shared/components';
import { Badge, Button } from '@/shared/ui';
import { cn } from '@/shared/utils';
import { ActionButtons } from './action-button';
import { InfoBoxes } from './Info-Boxes';
import { PriceAction } from './price-action';
import { StoreRate } from './store-rate';

type StoreCardProps = {
  hasFilter?: boolean;
  viewStore?: boolean;
  viewMap?: boolean;
  open?: boolean;
  navigation?: string;
};

export function StoreCard(props: StoreCardProps) {
  const {
    hasFilter = false,
    viewStore = false,
    viewMap = false,
    open = false,
    navigation,
  } = props;
  const [toggleInfo, setToggleInfo] = useState(open);
  const { push } = useRouter();
  const toggleAction = () => setToggleInfo(!toggleInfo);
  return (
    <div className="bg-content-inverse py-2">
      {hasFilter && <FilterActions />}
      <StoreRate toggleInfo={toggleInfo} toggleAction={toggleAction} />

      <>
        <div className={cn('bg-layout my-3 px-4 pb-5 pt-2')}>
          {toggleInfo && (
            <>
              <h4 className="text-content-primary text-headlineXSmall">
                عضویت از ۴ ماه پیش
              </h4>
              <p className="py-2 text-content-secondary text-bodySmall">
                گوشی موبایل اپل مدل iPhone 13 H دو سیم‌ کارت
              </p>
            </>
          )}
          <ActionButtons />
        </div>
        <div className="px-4">
          <div className="flex flex-wrap items-center gap-2 pt-4">
            <Badge variant="negative" className="py-[2px]">
              <Icon
                size={12}
                name="arrow-upward-trend"
                iconClassName="text-content-negative"
              />
              <span className="mr-[2px] text-content-negative text-bodyXSmall">
                کمترین قیمت
              </span>
            </Badge>
            <Badge variant="warning" className="px-2 py-[2px]">
              <Icon size={12} name="thunder" />
              <span className="mr-[2px] text-content-primary text-bodyXSmall">
                آگهی
              </span>
            </Badge>
            <Badge variant="positive" className="px-2 py-[2px]">
              <Icon
                size={12}
                name="spark-small-fill"
                iconClassName="text-content-positive"
              />
              <span className="mr-[2px] text-content-positive text-bodyXSmall">
                ضمانت آی‌تی بازار
              </span>
            </Badge>
          </div>
          <InfoBoxes />
          <PriceAction navigation={navigation} />
          {viewStore && (
            <div className="py-4">
              <Button
                onClick={() => push('/stores')}
                fullWidth
                className="h-[52px] rounded-xl"
              >
                نمایش همه فروشگاه‌ها
              </Button>
            </div>
          )}
          {viewMap && (
            <div className="py-4">
              <Button
                onClick={() => push('/stores')}
                fullWidth
                className="h-[52px] rounded-xl"
              >
                نمایش همه روی نقشه‌
              </Button>
            </div>
          )}
        </div>
      </>
    </div>
  );
}
