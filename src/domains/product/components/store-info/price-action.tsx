import React from 'react';
import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { Button } from '@/shared/ui';

export const PriceAction = () => {
  return (
    <div className="mb-2 mt-[2px] flex items-center justify-between border-y border-border-primary py-3">
      <p className="text-labelMedium text-content-primary">
        ۱‍۶۷,۰۰۰
        <span className="mr-1 text-bodyXXSmall">{CURRENCY.IR}</span>
      </p>
      <Button className="size-[32px] rounded-xl">
        <Icon iconClassName="text-content-invers" name="chevron-left" />
      </Button>
    </div>
  );
};
