'use client';

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from 'recharts';

import { SectionTitle } from '@/domains/home/components';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/shared/ui';
import { SortChanges } from './sort-changes';
const chartData = [
  { month: '۳۱ اردیبهشت', price: 224 },
  { month: '۱۵ اردیبهشت', price: 450 },
  { month: '۱ اردیبهشت', price: 200 },
];

const chartConfig = {
  price: {
    label: '۱۲ اردیبهشت',
    color: 'hsl(var(--chart-3))',
  },
} satisfies ChartConfig;

export function PriceChanges() {
  return (
    <div className="w-[360px]">
      <SortChanges />
      <ChartContainer config={chartConfig}>
        <LineChart width={400} accessibilityLayer data={chartData}>
          <CartesianGrid vertical={false} stroke={'#EAEAEA'} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <YAxis
            tickMargin={28}
            yAxisId="left"
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            yAxisId="right"
            orientation="right"
            tickLine={false}
            axisLine={false}
          />
          <ChartTooltip
            cursor={false}
            content={
              <ChartTooltipContent className="bg-black text-content-inverse shadow-elevation3" />
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
      <SectionTitle title="اطلاع رسانی قیمت" />
    </div>
  );
}
