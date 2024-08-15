"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";

import { Icon, IconType } from "@/shared/components";
import { SearchItemListType } from "@/shared/config/mock-data";
import { Separator } from "@/shared/ui";

type SearchItemProps = SearchItemListType & {
  iconName: IconType;
  activeBorder: Boolean;
};

export function SearchItem(props: SearchItemProps) {
  const { iconName, subtitle, title, activeBorder, latinName } = props;
  const params = useSearchParams();
  const query = params.get("query") || "";

  const linkHref = query
    ? { pathname: `/search/${latinName}`, query: { query } }
    : `/search?/${latinName}`;
  return (
    <>
      <Link href={linkHref} className="flex w-full items-center">
        <div className="px-6">
          <Icon name={iconName} iconClassName="text-content-secondary" />
        </div>
        <div className="flex w-full flex-col pt-3">
          <div className="space-y-[2px]">
            <h3 className="text-content-primary text-labelMedium">{title}</h3>
            <p className="text-content-tertiary text-bodySmall">{subtitle}</p>
          </div>
          {activeBorder && (
            <Separator className="w-full border-b border-border-primary pt-3 text-displaySmall" />
          )}
        </div>
      </Link>
    </>
  );
}
