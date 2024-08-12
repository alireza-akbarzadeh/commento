import { DiscountBadge } from "@/domains/home/components";

import { LazyImage } from "@/shared/components/lazy-image";
import { Products } from "@/shared/config/mock-data";

type ProductImageProps = Pick<Products, "imageUrl" | "discount">;

export function ProductImage(props: ProductImageProps) {
  const { imageUrl, discount } = props;
  return (
    <div className="relative flex size-[125px] items-center justify-center rounded-lg bg-surface-tertiary px-3 pb-[14px] pt-3">
      <div className="relative flex h-[101px] w-[99px]">
        <LazyImage
          src={imageUrl}
          style={{
            objectFit: "cover",
            position: "absolute",
          }}
          quality={100}
          alt="banner"
          fill
        />
      </div>
      {discount && <DiscountBadge discount={discount} />}
    </div>
  );
}
