import { useTranslations } from "next-intl";
import { ReportProblem } from "@/shared/components";
import { Button } from "@/shared/ui";
import { ScoreDetails } from "./score-details";

export function ActionButtons() {
  const t = useTranslations("Product");

  return (
    <div className="my-2 flex gap-3">
      <ScoreDetails />
      <ReportProblem
        actionButton={
          <Button
            variant="ghost"
            className="w-full text-content-primary shadow-elevation2 text-labelSmall"
          >
            {t("reportProblem")}
          </Button>
        }
      />
    </div>
  );
}
