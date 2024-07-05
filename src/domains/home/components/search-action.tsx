import { Mic, Search } from "lucide-react"
import { Button } from "@/components"

export function SearchAction() {
  return (
    <div className="my-2 flex items-center justify-between p-2.5">
      <Button variant="ghost" className="flex gap-2.5">
        <Search className="size-[19px] text-[#2C2C2E]" />
        <p className="text-base font-medium text-content-tertiary">جستجوی محصول...</p>
      </Button>
      <Button variant="ghost">
        <Mic className="size-[19px] text-content-primary" />
      </Button>
    </div>
  )
}
