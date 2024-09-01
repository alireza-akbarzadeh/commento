import { Icon, ReportProblem, TestScore } from "@/shared/components";
import { Separator } from "@/shared/ui";

export function RatingAndReport() {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex flex-1 flex-col items-center">
        <TestScore />
      </div>
      <Separator
        orientation="vertical"
        className="h-[72px] border-[0.6px] border-border-primary"
      />
      <ReportProblem
        actionButton={
          <div className="flex flex-1 flex-col items-center">
            <Icon name="flag-fill" />
            <span className="mt-1 text-labelXSmall">گزارش خطا</span>
          </div>
        }
      />
    </div>
  );
}
