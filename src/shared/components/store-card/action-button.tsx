import { ReportProblem } from "./report-problem";
import { ScoreDetails } from "./score-details";

export function ActionButtons() {
  return (
    <div className="my-2 flex gap-3">
      <ScoreDetails />
      <ReportProblem />
    </div>
  );
}
