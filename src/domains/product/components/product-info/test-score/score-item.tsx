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
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-[2px]">
        <span className="text-labelMedium text-content-primary">{title}</span>
        <p className="text-bodySmall text-content-tertiary">{subtitle}</p>
      </div>
      <div>
        <Badge variant={badge.variant}>{`${from}/${to}`}</Badge>
      </div>
    </div>
  );
}
