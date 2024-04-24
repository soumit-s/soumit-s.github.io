"use client";

import { useState } from "react";
import { twMerge } from "tailwind-merge";

type Props = React.PropsWithChildren<{
  className?: string;
  head: React.ReactNode;
}>;

const CollapsibleSection = ({ className, children, head }: Props) => {
  const [isCollapsed, setCollapsed] = useState(true);
  return (
    <section className={twMerge("px-8", className)}>
      <div>{head}</div>
      {!isCollapsed && <div>{children}</div>}
    </section>
  );
};

export default CollapsibleSection;
