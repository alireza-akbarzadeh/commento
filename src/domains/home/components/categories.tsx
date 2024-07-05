import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components"

export function Categories() {
  return (
    <section className="mt- mb-[64px]">
      <h3 className="px-3 py-2 text-lg font-semibold">دسته‌بندی‌ها</h3>
      <div className="">
        {Array.from({ length: 3 }).map((_, index) => (
          <div className="mt-5 flex gap-[22px] px-4" key={index}>
            <Button variant="ghost" className="flex w-full justify-between p-0">
              <div className="flex items-center gap-[5.6px]">
                <Image src="/svg/circle.svg" alt="circle" width={16} height={16} />
                <p className="text-xs font-medium text-primary">گوشی تلفن</p>
              </div>
              <ChevronLeft />
            </Button>
            <Button variant="ghost" className="flex w-full justify-between p-0">
              <div className="flex items-center gap-[5.6px]">
                <Image src="/svg/circle.svg" alt="circle" width={16} height={16} />
                <p className="text-xs font-medium text-primary">گوشی تلفن</p>
              </div>
              <ChevronLeft />
            </Button>
          </div>
        ))}
      </div>
    </section>
  )
}
