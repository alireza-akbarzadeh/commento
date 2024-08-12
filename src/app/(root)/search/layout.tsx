import { PropsWithChildren } from "react";

function SearchLayout(props: PropsWithChildren) {
  const { children } = props;
  return <main>{children}</main>;
}

export default SearchLayout;
