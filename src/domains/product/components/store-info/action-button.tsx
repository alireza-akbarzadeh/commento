import { Button } from '@/shared/ui';

export function ActionButtons() {
  return (
    <div className="pb-5">
      <div className="my-2 flex gap-3 px-4">
        <Button
          variant="ghost"
          className="w-full text-content-primary shadow-elevation2 text-labelSmall"
        >
          جزییات امتیاز
        </Button>
        <Button
          variant="ghost"
          className="w-full text-content-primary shadow-elevation2 text-labelSmall"
        >
          گزارش مشکل
        </Button>
      </div>
    </div>
  );
}
