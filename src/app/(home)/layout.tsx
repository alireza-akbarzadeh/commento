import React from 'react';

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main className="h-dvh">{children}</main>;
}
