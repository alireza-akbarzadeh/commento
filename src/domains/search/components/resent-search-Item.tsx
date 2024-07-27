import React from 'react';
import { Icon, IconType } from '@/shared/components';
import { Separator } from '@/shared/ui';

type ResentSearchItemProps = {
  iconName: IconType;
  title: string;
  subtitle: string;
  activeBorder: Boolean;
};

export function ResentSearchItem(props: ResentSearchItemProps) {
  const { iconName, subtitle, title, activeBorder } = props;

  return (
    <>
      <div className="flex h-[78px] items-center pl-4 pt-3">
        <div className="px-6">
          <Icon name={iconName} />
        </div>
        <div className="space-y-[2px]">
          <h3 className="text-content-primary text-labelMedium">{title}</h3>
          <p className="text-content-tertiary text-bodySmall">{subtitle}</p>
        </div>
      </div>
      {activeBorder && (
        <Separator className="my-4 border-b border-border-primary text-displaySmall" />
      )}
    </>
  );
}
