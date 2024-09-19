import React from "react";
import { Icon } from "@/shared/components";

type RatingProps = {
  value: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
};

export function Rating({ value, onChange, readonly = false }: RatingProps) {
  const totalStars = 5;
  const filledStars = Math.floor(value);
  const hasHalfStar = value % 1 !== 0;

  const handleClick = (starIndex: number) => {
    if (!readonly && onChange) {
      onChange(starIndex + 1);
    }
  };

  return (
    <div className="flex gap-1">
      {[...Array(totalStars)].map((_, index) => (
        <button
          key={index}
          className={`cursor-${readonly ? "default" : "pointer"}`}
          onClick={() => handleClick(index)}
        >
          {index < filledStars ? (
            <Icon
              name="star-fill"
              size="xSmall"
              iconClassName="text-content-primary"
            />
          ) : index === filledStars && hasHalfStar ? (
            <div className="relative">
              <Icon name="star" size="xSmall" iconClassName="text-yellow-400" />
              <div className="absolute inset-0 w-1/2 overflow-hidden">
                <Icon
                  name="star-fill"
                  size="xSmall"
                  iconClassName="text-yellow-400"
                />
              </div>
            </div>
          ) : (
            <Icon
              name="star-fill"
              size="xSmall"
              iconClassName="text-gray-300"
            />
          )}
        </button>
      ))}
    </div>
  );
}
