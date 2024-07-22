'use client';
import {
  CartesianGrid,
  Line,
  LineChart,
  Tooltip,
  TooltipProps,
  XAxis,
  YAxis,
} from 'recharts';
import { Icon } from '@/shared/components';
import { CURRENCY } from '@/shared/constant';
import { ChartConfig, ChartContainer } from '@/shared/ui';
import { SortChanges } from './sort-changes';

// Define the chart data type
interface ChartData {
  month: string;
  price: number;
}

const chartData: ChartData[] = [
  { month: 'فروردین', price: 140 },
  { month: 'اردیبهشت', price: 300 },
  { month: 'خرداد', price: 150 },
  { month: 'تیر', price: 300 },
];

const chartConfig = {
  price: {
    label: '۱۲ اردیبهشت',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

// Define the custom tooltip props
interface CustomTooltipProps extends TooltipProps<number, string> {}

const CustomTooltip: React.FC<CustomTooltipProps> = ({
  active,
  payload,
  label,
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip relative space-y-2 rounded bg-content-primary px-4 py-3 text-content-inverse shadow-elevation3 text-bodyXSmall">
        <p className="">{`${payload[0].value} ${CURRENCY.IR}`}</p>
        <p className="">{`۱۲ ${label} ۱۴۰۳ `}</p>
        <div className="tooltip-triangle border-l-5 border-r-5 border-t-5 absolute bottom-[-5px] left-1/2 size-0 -translate-x-1/2 border-x-transparent border-t-black"></div>
      </div>
    );
  }
  return null;
};

export function PriceChanges() {
  return (
    <div className="max-w-sm bg-content-inverse px-4">
      <div className="flex items-center gap-[14.4px] bg-content-inverse py-2">
        <h3 className="text-content-primary text-labelSmall">
          اطلاع رسانی قیمت
        </h3>
        <Icon name="chevron-left" size="small" />
      </div>
      <SortChanges />
      <ChartContainer config={chartConfig}>
        <LineChart width={400} accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} stroke={'#EAEAEA'} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={{ stroke: '#EAEAEA' }}
            tickMargin={9}
            tick={({ x, y, payload }) => (
              <text x={x} y={y} className="text-[#A9A9A9] text-bodyXSmall">
                {payload.value}
              </text>
            )}
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            tickMargin={14}
            axisLine={{ stroke: '#EAEAEA' }}
            tickFormatter={(value) => `${value}`}
            tick={({ x, y, payload }) => (
              <text x={x} y={y} className="text-[#A9A9A9] text-bodyXSmall">
                {payload.value}
              </text>
            )}
          />

          <Tooltip content={<CustomTooltip />} />
          <Line
            yAxisId="left"
            dataKey="price"
            type="linear"
            stroke="var(--color-price)"
            strokeWidth={2}
            dot={{ fill: 'var(--color-price)' }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
