import Image from 'next/image';
import React from 'react';
import { Separator } from '@/shared/ui';

type ResentSearchItemProps = {
  iconUrl: string;
  title: string;
  subtitle: string;
  activeBorder: Boolean;
};

export function ResentSearchItem(props: ResentSearchItemProps) {
  const { iconUrl, subtitle, title, activeBorder } = props;

  return (
    <>
      <div className="flex items-center pl-4 pt-3">
        <div className="px-6">
          <Image src={iconUrl} width={20} height={20} alt={title} />
        </div>
        <div className="space-y-[2px]">
          <h4 className="text-labelMedium text-content-primary">{title}</h4>
          <p className="text-bodySmall text-content-tertiary">{subtitle}</p>
        </div>
      </div>
      {activeBorder && (
        <Separator className="my-4 border-b border-border-primary text-displaySmall" />
      )}
    </>
  );
}
