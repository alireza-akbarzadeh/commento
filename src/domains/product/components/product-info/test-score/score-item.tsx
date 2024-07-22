import { VariantProps } from 'class-variance-authority';
import { Badge, badgeVariants } from '@/shared/ui';

type SpecificItemProps = {
  title: string;
  subtitle: String;
  from: string;
  to: string;
  badge: VariantProps<typeof badgeVariants>;
};

export function ScoreItem(props: SpecificItemProps) {
  const { subtitle, title, from, to, badge } = props;
  return (
    <div className="mt-3 flex items-center justify-between">
      <div className="flex flex-col gap-[2px]">
        <span className="text-content-primary text-labelMedium">{title}</span>
        <p className="text-content-tertiary text-bodySmall">{subtitle}</p>
      </div>
      <div>
        <Badge
          variant={badge.variant}
          className={
            badge.variant === 'warning'
              ? 'bg-surface-warningLight text-content-warning'
              : ''
          }
        >{`${from}/${to}`}</Badge>
      </div>
    </div>
  );
}
