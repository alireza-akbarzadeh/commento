import React from "react";
import { Icon, Rating } from "@/shared/components";
import { Button, Carousel, CarouselContent, CarouselItem } from "@/shared/ui";

export function CommentSlide() {
  return (
    <div className="bg-content-inverse px-4 pt-4">
      <div className="flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <h3 className="text-content-primary text-labellarge">
            امتیاز در کامنتو
            <span className="mr-1 text-[#636366]">(۶۳)</span>
          </h3>
          <Icon name="chevron-left" size="small" />
        </div>
        <div className="flex gap-2">
          <p className="text-headlineSmall">۴.۶</p>
          <Icon name="star-fill" />
        </div>
      </div>
      <Carousel opts={{ direction: "rtl", dragFree: true }}>
        <CarouselContent className="bg-content-inverse">
          {[...Array(5)].map((product, index) => (
            <CarouselItem key={index} className={`basis-5/6 p-2.5`}>
              <div className="rounded-lg border-2 border-surface-tertiary py-3">
                <div className="p-4">
                  <p>
                    جنس جلو و پشت از شیشه کار شده و پلاستیک فشرده وارداتی ویژه
                    سامسونگ
                  </p>
                  <p className="pt-3 text-content-tertiary text-bodySmall">
                    احمد رضایی
                  </p>
                  <p className="text-content-tertiary text-bodySmall">
                    ۱۲ اردیبهشت ۱۴۰۳
                  </p>
                  <div className="py-2">
                    <Rating readonly value={4} />
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <div className="pb-6 pt-4">
        <Button fullWidth className="h-14 rounded-2xl" variant="tertiary">
          نظر خود را بنویسید
        </Button>
      </div>
    </div>
  );
}
