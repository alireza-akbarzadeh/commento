import { SectionTitlePropType } from "@/domains/home/home-types";
import { Icon } from "@/shared/components";

export function SectionTitle(props: SectionTitlePropType) {
  const { title } = props;
  return (
    <div className="flex items-center bg-content-inverse px-4 py-2">
      <h3 className="text-content-primary text-labellarge">{title}</h3>
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
