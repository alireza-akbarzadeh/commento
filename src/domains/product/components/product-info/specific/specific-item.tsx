import { Separator } from '@/shared/ui';

type SpecificItemProps = { title: string; subtitle: String; border?: false };

export function SpecificItem(props: SpecificItemProps) {
  const { subtitle, title, border = true } = props;
  return (
    <>
      <div className="py-3">
        <span className="text-content-tertiary text-bodySmall">{title}</span>
        <p className="text-labelMedium">{subtitle}</p>
      </div>
      {border && <Separator className="my-2 border-b border-border-primary" />}
    </>
  );
}
