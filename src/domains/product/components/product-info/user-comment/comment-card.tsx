import React from "react";

import { Icon, Rating } from "@/shared/components";

export const CommentCard = () => {
  return (
    <div className="border-b border-r-surface-primary p-4">
      <p>جنس جلو و پشت از شیشه کار شده و پلاستیک فشرده وارداتی ویژه سامسونگ</p>
      <p className="pt-3 text-content-tertiary text-bodySmall">احمد رضایی</p>
      <p className="text-content-tertiary text-bodySmall">۱۲ اردیبهشت ۱۴۰۳ </p>
      <div className="flex items-center justify-between py-2">
        <Rating readonly value={4} />
        <div className="flex items-center gap-2">
          <span className="text-labelSmal pt-2">۲۳</span>
          <Icon name="thumb-up" />
        </div>
      </div>
    </div>
  );
};
