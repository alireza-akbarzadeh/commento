import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function CategoryRow() {
  return (
    <div className="flex gap-2.5 py-2 pr-4">
      <Button
        variant="ghost"
        className="flex w-full justify-between rounded-lg bg-surface-secondary"
      >
        <div className="flex items-center gap-[5.6px]">
          <Icon name="default" size="small" />
          <p className="text-labelSmall text-content-primary">گوشی تلفن</p>
        </div>
        <Icon name="chevron-left" size="small" />
      </Button>
      <Button
        variant="ghost"
        className="flex w-full justify-between rounded-lg bg-surface-secondary"
      >
        <div className="flex items-center gap-[5.6px]">
          <Icon name="default" size="small" />
          <p className="text-labelSmall text-content-primary">گوشی تلفن</p>
        </div>
        <Icon name="chevron-left" size="small" />
      </Button>
    </div>
  );
}
