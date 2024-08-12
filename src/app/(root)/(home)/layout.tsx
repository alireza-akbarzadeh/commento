import React from "react";
import { SearchAction } from "@/domains/home/containers";

import { BottomNavigation } from "@/shared/components";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SearchAction />
      <main id="home-content" data-testid="home-content" className="bg-layout">
        {children}
      </main>
      <BottomNavigation />
    </>
  );
}
