import React from 'react';
import { cn } from '@/shared/utils';
import { Icon } from '../icons';

type SpinProps = {
  className?: string;
};

export function Spin(props: SpinProps) {
  const { className } = props;
  return (
    <Icon
      iconClassName={cn(`"mr-2 size-4 animate-spin ${className}`)}
      name="loading-spinner"
      size="medium"
    />
  );
}
