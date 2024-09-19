import { useTranslations } from "next-intl";
import { Icon, LinearProgress } from "@/shared/components";
import {
  Button,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/shared/ui";

import { CommentCard } from "./comment-card";

export function UserComment() {
  const t = useTranslations("Product");
  return (
    <>
      <Drawer>
        <DrawerTrigger>
          <div className="flex flex-col items-center hover:bg-none">
            <Icon name="dialog-box-text" size="small" />
            <p className="text-content-primary text-labelXSmall">
              {t("userComment")}
            </p>
          </div>
        </DrawerTrigger>
        <DrawerContent className="h-full rounded-none pb-6">
          <DrawerHeader className="flex items-center justify-between">
            <DrawerClose>
              <Button className="size-8" variant="ghost" roundedFull>
                <Icon name="arrow-right" />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="flex items-center justify-between px-4 py-2">
            <div className="">
              <h3 className="text-labellarge">امتیاز در کامنتو (۶۳)</h3>
              <div className="flex items-center gap-2">
                <Icon name="circle-information" size="small" />
                <p className="text-content-tertiary">اطلاعات بیشتر</p>
              </div>
            </div>
            <div className="flex gap-2">
              <p className="text-headlineSmall">۴.۶</p>
              <Icon name="star-fill" />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-2.5 border-b-8 border-surface-secondary px-4 pb-8">
            <div className="flex items-center gap-3">
              <span className="text-content-primary text-labelXSmall">5</span>
              <LinearProgress value={75} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-content-primary text-labelXSmall">4</span>
              <LinearProgress value={50} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-content-primary text-labelXSmall">3</span>
              <LinearProgress value={35} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-content-primary text-labelXSmall">2</span>
              <LinearProgress value={25} />
            </div>
            <div className="flex items-center gap-3">
              <span className="text-content-primary text-labelXSmall">1</span>
              <LinearProgress value={10} />
            </div>
          </div>

          <div className="flex items-center justify-between px-4 pb-2.5 pt-[18px]">
            <p>۳۴ نظر</p>
            <Select>
              <SelectTrigger className="w-[150px] rounded-xl">
                <SelectValue placeholder="اخرین نظر" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>آخرین نظر</SelectLabel>
                  <SelectItem value="apple">اولین نظر</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <CommentCard />
          <CommentCard />
          <CommentCard />
          <CommentCard />
        </DrawerContent>
      </Drawer>
    </>
  );
}
