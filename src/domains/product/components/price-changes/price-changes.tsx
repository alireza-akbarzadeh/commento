'use client';

import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui';
const chartData = [
  { month: 'فروردین', price: 100 },
  { month: 'اردیبهشت', price: 450 },
  { month: 'خرداد', price: 200 },
  { month: 'تیر', price: 300 },
  { month: 'مرداد', price: 150 },
  { month: 'شهریور', price: 350 },
];

const chartConfig = {
  price: {
    label: '۱۲ اردیبهشت',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function PriceChanges() {
  return (
    <ChartContainer config={chartConfig}>
      <LineChart
        accessibilityLayer
        data={chartData}
        margin={{
          left: 10,
          right: 10,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent className="bg-black text-content-inverse shadow-elevation3" />
          }
        />
        <Line
          dataKey="price"
          type="linear"
          stroke="var(--color-price)"
          strokeWidth={2}
          dot={{
            fill: 'var(--color-price)',
          }}
          activeDot={{
            r: 6,
          }}
        />
      </LineChart>
    </ChartContainer>
  );
}
