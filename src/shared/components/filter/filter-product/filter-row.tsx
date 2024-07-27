import React from 'react';
import { Icon } from '@/shared/components';

type FilterRowProps = {
  title: string;
};

export const FilterRow = (props: FilterRowProps) => {
  const { title } = props;
  return (
    <div className="flex items-center justify-between py-3">
      <p className="text-content-primary text-bodyMedium">{title}</p>
      <Icon name="chevron-left" iconClassName="text-content-tertiary" />
    </div>
  );
};
