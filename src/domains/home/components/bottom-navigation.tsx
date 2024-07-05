import Image from "next/image"
import { Button } from "@/components"

export function BottomNavigation() {
  const navigation = [
    { path: "/svg/search.svg", lable: "جستوجو" },
    { path: "/svg/category.svg", lable: "دسته‌‌بندی‌ها" },
    { path: "/svg/discount.svg", lable: "تخفیف‌ها" },
    { path: "/svg/user-profile.svg", lable: "پروفایل" },
  ]

  return (
    <div className="border- t h-[93px] w-full border-t-border-primary">
      <div className="flex items-center justify-between pb-[34px] pt-[17.5px]">
        {navigation.map((nav) => (
          <Button key={nav.lable} variant="ghost" className="flex flex-col items-center gap-[3px]">
            <Image width={20} height={20} src={nav.path} alt={nav.lable} className="text-red-400" />
            <span>جستجو</span>
          </Button>
        ))}
      </div>
      {/* <span className="mx-auto my-3 block h-[5px] w-[139px] bg-content-primary" /> */}
    </div>
  )
}
