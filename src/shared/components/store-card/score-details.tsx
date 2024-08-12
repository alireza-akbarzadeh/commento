import { useTranslations } from 'next-intl';
import React from 'react';
import { Icon } from '@/shared/components';
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTrigger,
} from '@/shared/ui';

export const ScoreDetails = () => {
  const t = useTranslations('Product');
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="w-full text-content-primary shadow-elevation2 text-labelSmall"
        >
          {t('scoreDetails')}
        </Button>
      </DrawerTrigger>
      <DrawerContent className="h-full rounded-none pb-4">
        <DrawerHeader className="flex items-center justify-between">
          <DrawerClose>
            <div className="flex-center size-8 rounded-full bg-surface-tertiary">
              <Icon size="small" name="arrow-right" />
            </div>
          </DrawerClose>
        </DrawerHeader>
        <DrawerDescription />
        <div className="flex h-full flex-col justify-between">
          content gose here
        </div>
      </DrawerContent>
    </Drawer>
  );
};
