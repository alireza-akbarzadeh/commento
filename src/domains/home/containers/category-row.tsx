import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export function CategoryRow() {
  return (
    <div className="flex gap-2.5 px-4 py-2">
      <Row />
      <Row />
    </div>
  );
}

function Row() {
  return (
    <Button
      variant="ghost"
      className="m-0 flex h-12 w-full items-center justify-start rounded-xl bg-surface-secondary p-0"
    >
      <div className="flex w-full items-center justify-between">
        <div className="flex items-center gap-[5.6px] pr-2">
          <Icon name="default" size="small" />
          <p className="text-labelSmall text-content-primary">گوشی تلفن</p>
        </div>
        <div className="px-1">
          <Icon name="chevron-left" size="small" />
        </div>
      </div>
    </Button>
  );
}
