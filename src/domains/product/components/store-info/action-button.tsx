import { Button } from '@/shared/ui';

export function ActionButtons() {
  return (
    <div className="bg-layout mb-8">
      <div className="bg-layout my-2 flex gap-3 px-4">
        <Button
          variant="ghost"
          className="w-full text-labelSmall text-content-primary shadow-elevation2"
        >
          جزییات امتیاز
        </Button>
        <Button
          variant="ghost"
          className="w-full text-labelSmall text-content-primary shadow-elevation2"
        >
          گزارش مشکل
        </Button>
      </div>
    </div>
  );
}
