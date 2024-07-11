import { Icon } from '@/shared/components';

type SectionTitlePropType = {
  title: string;
};

export function SectionTitle(props: SectionTitlePropType) {
  const { title } = props;
  return (
    <div className="my-2 flex h-[48px] items-center gap-[14.4px]">
      <h3 className="text-labellarge text-content-primary">{title}</h3>
      <Icon name="chevron-left" size="small" />
    </div>
  );
}
