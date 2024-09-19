import React from "react";

interface LinearProgressProps {
  value: number;
  className?: string;
}

export function LinearProgress({ value, className = "" }: LinearProgressProps) {
  // Ensure the value is between 0 and 100
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={`w-full max-w-md ${className}`}>
      <div className="h-[10px] overflow-hidden rounded-full bg-[#EBEBEB]">
        <div
          className="h-full rounded-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${clampedValue}%` }}
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
}
