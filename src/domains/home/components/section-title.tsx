import { Icon } from '@/shared/components';

type SectionTitlePropType = {
  title: string;
};

export function SectionTitle(props: SectionTitlePropType) {
  const { title } = props;
  return (
    <div>
      <div className="flex items-center gap-[14.4px] px-4 py-2">
        <h3 className="text-lg font-semibold text-content-primary">{title}</h3>
        <Icon name="chevron-left" size="small" />
      </div>
    </div>
  );
}
