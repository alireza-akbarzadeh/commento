import { ChevronLeft } from 'lucide-react';

type SectionTitlePropType = {
  title: string;
};

export function SectionTitle(props: SectionTitlePropType) {
  const { title } = props;
  return (
    <div>
      <div className="flex items-center gap-[14.4px] px-4 py-2">
        <h3 className="text-lg font-semibold text-content-primary">{title}</h3>
        <ChevronLeft className="size-5 font-semibold text-content-primary" />
      </div>
    </div>
  );
}
