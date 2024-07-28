'use client';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
  const params = useSearchParams();
  const query = params.get('query') || '';

  const linkHref = query
    ? { pathname: `/product-list/${latinName}`, query: { query } }
    : `/product-list/${latinName}`;
  return (
    <>
      <Link href={linkHref} className="flex items-center py-3 pl-4">
        <div className="px-6">
          <Icon name={iconName} />
        </div>
        <div className="space-y-[2px]">
          <h3 className="text-content-primary text-labelMedium">{title}</h3>
          <p className="text-content-tertiary text-bodySmall">{subtitle}</p>
        </div>
      </Link>
      {activeBorder && (
        <Separator className="border-b border-border-primary text-displaySmall" />
      )}
    </>
  );
}
