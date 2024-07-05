import { ChevronLeft } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components"

export function Categories() {
  return (
    <section className="border-inve mb-[64px] mt-6">
      <div className="my-2">
        <h3 className="text-lg font-semibold">دسته‌بندی‌ها</h3>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className="flex gap-[22px]" key={index}>
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
