import { useRouter } from 'next/navigation';
import { Icon } from '@/shared/components';
import { Button } from '@/shared/ui';

export const MapBackButton = () => {
  const { push } = useRouter();
  return (
    <div className="lef-2 absolute top-2 z-10">
      <Button
        onClick={() => {
          push('/');
        }}
        className="rounded-full"
        size="icon"
        variant="tertiary"
      >
        <Icon
          name="arrow-right"
          size="medium"
          iconClassName="text-content-primary"
        />
      </Button>
    </div>
  );
};
