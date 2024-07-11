'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

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
        margin={{ left: 12, right: 12 }}
        accessibilityLayer
        data={chartData}
      >
        <CartesianGrid vertical={false} horizontal={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
        />
        <YAxis yAxisId="left" tickLine={false} axisLine={false} />
        <YAxis
          yAxisId="right"
          orientation="right"
          tickLine={false}
          axisLine={false}
        />
        <ChartTooltip
          cursor={false}
          content={
            <ChartTooltipContent className="shadow-elevation3 bg-black text-content-inverse" />
          }
        />
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
  );
}
