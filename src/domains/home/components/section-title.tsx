import { Icon } from '@/shared/components';

type SectionTitlePropType = {
  title: string;
};

export function SectionTitle(props: SectionTitlePropType) {
  const { title } = props;
  return (
    <div className="flex items-center bg-content-inverse px-4 py-2">
      <h3 className="text-labellarge text-content-primary">{title}</h3>
      <div className="flex-center size-8 pt-1">
        <Icon
          name="chevron-left"
          size="small"
          iconClassName="content-primary"
        />
      </div>
    </div>
  );
}
