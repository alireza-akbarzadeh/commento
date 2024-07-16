import { Button } from '@/shared/ui';
import { Icon } from '../../icons';

type MapTargetIconProps = {
  handleGeoLocation: () => void;
};

export const MapTargetIcon = (props: MapTargetIconProps) => {
  return (
    <div className="absolute bottom-12 left-2">
      <Button
        onClick={props.handleGeoLocation}
        className="size-10 rounded-full"
      >
        <Icon name="target" size="small" iconClassName="bg-content-invers" />
      </Button>
    </div>
  );
};
