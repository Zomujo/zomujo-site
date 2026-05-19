"use client";

import Link from "next/link";
import { ReactNode } from "react";

type DisabledLinkProps = {
  href?: string;
  className?: string;
  children: ReactNode;
};

export default function DisabledLink({
  href = "#",
  className,
  children,
}: DisabledLinkProps) {
  return (
    <Link
      href={href}
      className={className}
      aria-disabled="true"
      onClick={(event) => event.preventDefault()}
    >
      {children}
    </Link>
  );
}
