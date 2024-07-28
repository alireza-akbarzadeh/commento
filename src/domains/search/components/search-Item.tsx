import Link from 'next/link';
import React from 'react';
import { Icon, IconType } from '@/shared/components';
import { SearchItemListType } from '@/shared/config/mock-data';
import { Separator } from '@/shared/ui';

type SearchItemProps = SearchItemListType & {
  iconName: IconType;
  activeBorder: Boolean;
};

export function SearchItem(props: SearchItemProps) {
  const { iconName, subtitle, title, activeBorder, latinName } = props;

  return (
    <>
      <Link
        href={`/product-list/${latinName}`}
        className="flex h-[78px] items-center pl-4 pt-3"
      >
        <div className="px-6">
          <Icon name={iconName} />
        </div>
        <div className="space-y-[2px]">
          <h3 className="text-content-primary text-labelMedium">{title}</h3>
          <p className="text-content-tertiary text-bodySmall">{subtitle}</p>
        </div>
      </Link>
      {activeBorder && (
        <Separator className="my-4 border-b border-border-primary text-displaySmall" />
      )}
    </>
  );
}
