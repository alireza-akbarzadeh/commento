import Image from "next/image"

type DiscountBadgePropsType = {
  price: string
}

export function DiscountBadge(props: DiscountBadgePropsType) {
  const { price } = props
  return (
    <div className="absolute top-0 flex h-5 w-10 -translate-x-9 items-center justify-between gap-[2px] rounded-sm bg-gradient-to-r from-[#FF334B] via-[#FF223D] to-[#EC4C60] px-1">
      <span className="text-[11px] font-semibold text-white">{price}</span>
      <Image objectFit="contain" src="svg/discount-fill.svg" width={10} height={10} alt="discount-fill" />
    </div>
  )
}
