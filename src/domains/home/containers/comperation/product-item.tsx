import Link from "next/link";
import { ProductImage } from "@/shared/components/product-swipe/product-image";
import { Products } from "@/shared/config/mock-data";

export function ProductItem(props: Products) {
  const { latinName, title, discount, imageUrl } = props;
  return (
    <div className="flex max-w-[145px] flex-col">
      <Link
        href={`/product/${latinName}`}
        aria-label="see the product in details"
        className="flex-center relative m-2.5 flex-col"
      >
        <ProductImage {...{ discount, imageUrl }} />
      </Link>
      <div className="space-y-1 pr-2 pt-3">
        <p className="line-clamp-2 text-content-primary text-labelSmall">
          {title.length > 40 ? title.slice(0, 38).concat("...") : title}
        </p>
      </div>
    </div>
  );
}
