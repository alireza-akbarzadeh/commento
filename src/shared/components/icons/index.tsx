'use client';
import IcoMoon from 'react-icomoon';

import { cn } from '@/shared/utils';
import { iconNames, IconType } from './icon-names';
import iconSet from './selection.json';

type IconSize = 'xxSmall' | 'xSmall' | 'small' | 'medium' | 'large' | 'xLarge';
type IconProps = {
  size?: IconSize;
  name: IconType;
  style?: React.CSSProperties;
  iconClassName?: string;
  parentClassName?: string;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent) => void;
  noSize?: boolean;
};

const sizes: Record<IconSize, number> = {
  xxSmall: 16,
  xSmall: 18,
  small: 20,
  medium: 24,
  large: 28,
  xLarge: 32,
};

const Icon = (props: IconProps): JSX.Element => {
  const {
    name,
    size = 'medium',
    onClick,
    disabled = false,
    parentClassName,
    iconClassName,
    noSize,
    style,
    ...rest
  } = props;
  return (
    <div className={cn(parentClassName)}>
      <IcoMoon
        className={cn(`text-content-primary ${iconClassName}`)}
        iconSet={iconSet}
        icon={name}
        size={!noSize ? sizes[size] : undefined}
        style={{
          cursor: disabled ? 'not-allowed !important' : 'pointer',
          ...style,
        }}
        onClick={(event) => {
          if (!disabled) {
            onClick?.(event);
          }
        }}
        {...rest}
      />
    </div>
  );
};

export type { IconProps, IconType, IconSize };
export { Icon, iconNames };
