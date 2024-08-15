import React from "react";
import { SearchAction } from "@/domains/home/containers";

import { BottomNavigation } from "@/shared/components";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-content-inverse">
      <SearchAction />
      <main id="home-content" data-testid="home-content">
        {children}
      </main>
      <BottomNavigation />
    </div>
  );
}
