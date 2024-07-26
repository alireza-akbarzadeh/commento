import React, { PropsWithChildren } from 'react';
import { BottomNavigation } from '@/shared/components';

function SearchLayout(props: PropsWithChildren) {
  const { children } = props;
  return (
    <main>
      {children}
      <BottomNavigation />
    </main>
  );
}

export default SearchLayout;
