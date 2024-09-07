"use client";

import {
  CartesianGrid,
  Dot,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Icon } from "@/shared/components";
import { ChartConfig, ChartContainer } from "@/shared/ui";
import { formatNumberToPersian } from "@/shared/utils";

import { ChartTooltip } from "./chart-tooltip";
import { SortDay } from "./sort-day";

interface ChartData {
  month: string;
  price: number;
  fill: string;
}

const chartData: ChartData[] = [
  { month: "فروردین", price: 2600000, fill: "var(--color-chrome)" },
  { month: "اردیبهشت", price: 2100000, fill: "var(--color-safari)" },
  { month: "خرداد", price: 2800000, fill: "var(--color-firefox)" },
  { month: "تیر", price: 2100000, fill: "var(--color-edge)" },
];

const chartConfig = {
  price: {
    label: "۱۲ اردیبهشت",
    color: "#2C2C2E",
  },
  edge: {
    label: "Edge",
    color: "#000",
  },
  safari: {
    label: "Safari",
    color: "#004CC4",
  },
  firefox: {
    label: "Firefox",
    color: "#048848",
  },
} satisfies ChartConfig;

export function PriceChart() {
  return (
    <div className="bg-content-inverse px-4 py-2">
      <div className="flex items-center gap-1 bg-content-inverse py-2">
        <h3 className="text-content-primary text-labellarge">
          اطلاع رسانی قیمت
        </h3>
        <Icon name="chevron-left" size="small" />
      </div>
      <SortDay />
      <ChartContainer className="mt-4" config={chartConfig}>
        <LineChart accessibilityLayer width={400} data={chartData}>
          <CartesianGrid vertical={false} stroke={"#EAEAEA"} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={9}
            tick={({ x, y, payload }) => (
              <text
                x={x}
                y={y}
                style={{
                  fill: "#636366",
                  fontSize: "12px",
                  fontWeight: 400,
                  fontFamily: "Vazirmatn-Regular",
                }}
              >
                {payload.value ?? ""}
              </text>
            )}
          />
          <YAxis
            yAxisId="left"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tick={({ x, y, payload }) => {
              return (
                <text
                  x={x}
                  y={y}
                  style={{
                    fill: "#A9A9A9",
                    fontSize: "12px",
                    fontWeight: 400,
                    fontFamily: "Vazirmatn-Regular",
                  }}
                >
                  {payload.value > 0
                    ? formatNumberToPersian(payload.value)
                    : null}
                </text>
              );
            }}
          />

          <Tooltip content={<ChartTooltip />} />
          <Line
            yAxisId="left"
            dataKey="price"
            type="linear"
            stroke="var(--color-price)"
            strokeWidth={2}
            dot={({ payload, ...props }) => {
              return (
                <Dot
                  key={payload.month}
                  r={5}
                  cx={props.cx}
                  cy={props.cy}
                  fill={payload.fill}
                  stroke={payload.fill}
                />
              );
            }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
