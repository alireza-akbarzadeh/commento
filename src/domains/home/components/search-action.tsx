import { Mic, Search } from "lucide-react";
import { Button } from "@/components";

export function SearchAction() {
  return (
    <div className="flex items-center justify-between">
      <Button variant="ghost" className="flex gap-2.5">
        <Search className="size-[19px] text-content-secondary" />
        <p className="text-base text-content-tertiary font-medium ">
          جستجوی محصول...
        </p>
      </Button>
      <Button variant="ghost">
        <Mic className=" size-[19px] text-content-primary" />
      </Button>
    </div>
  );
}
