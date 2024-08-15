import Link from "next/link";

import { Icon, IconSize, IconType } from "@/shared/components";
import { cn } from "@/shared/utils";

type NavItemProps = {
  active: boolean;
  icon: IconType;
  label: string;
  size: IconSize;
  href: string;
};

export function NavItem(props: NavItemProps) {
  const { active, icon, label, size, href } = props;
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex flex-col items-center space-y-[3px] text-content-tertiary",
          {
            "text-content-primary": active,
          },
        )}
      >
        <Icon
          name={icon}
          size={size}
          iconClassName={cn("text-content-tertiary", {
            "text-content-primary": active,
          })}
        />
        <span
          className={cn("text-content-tertiary text-bodyXXSmall", {
            "text-content-primary": active,
          })}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
