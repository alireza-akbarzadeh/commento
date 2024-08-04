import { PropsWithChildren } from 'react';
import { StoreAppbar } from '@/domains/store';

function Layout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <div
      id="root"
      data-testid="root"
      className="container relative h-dvh min-h-dvh max-w-lg bg-content-inverse p-0"
    >
      <StoreAppbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
