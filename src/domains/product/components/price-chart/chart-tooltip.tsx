import { TooltipProps } from "recharts";

import { CURRENCY } from "@/shared/constant";
import { formatNumberToPersian } from "@/shared/utils";

type CustomTooltipProps = TooltipProps<number, string>;

export const ChartTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip relative space-y-2 rounded bg-content-primary px-4 py-3 text-content-inverse shadow-elevation3 text-bodyXSmall">
        <p className="">{`${formatNumberToPersian(Number(payload[0].value))} ${CURRENCY.IR}`}</p>
        <p className="">{`۱۲ ${label} ۱۴۰۳ `}</p>
        <div className="tooltip-triangle border-l-5 border-r-5 border-t-5 absolute bottom-[-5px] left-1/2 size-0 -translate-x-1/2 border-x-transparent border-t-black"></div>
      </div>
    );
  }
  return null;
};
