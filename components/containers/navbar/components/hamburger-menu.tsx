"use client";

import Hamburger from "hamburger-react";
import { ValueOf } from "next/dist/shared/lib/constants";
import Link from "next/link";
import React from "react";

import { ThemeToggle } from "@/components/presentational";
import { links } from "@/config";
import { cn, useClickOutsideListener } from "@/utils";

interface HamburgerMenuProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  data: Array<ValueOf<typeof links>>;
}

export function HamburgerMenu({
  data,
  className,
  ...props
}: HamburgerMenuProps) {
  const ref = React.useRef<HTMLElement>(null);
  const [isOpen, setOpen] = React.useState(false);

  useClickOutsideListener(ref, () => setOpen(false));

  return (
    <section ref={ref} className={cn(className, "relative z-50")} {...props}>
      <Hamburger toggled={isOpen} toggle={setOpen} />
      {isOpen && (
        <ul className="dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48">
          {data.map((link) => (
            <li key={link.src}>
              <Link href={link.src}>
                <button type="button" className="btn btn-primary w-full">
                  {link.name}
                </button>
              </Link>
            </li>
          ))}
          <li className="mt-2">
            <ThemeToggle />
          </li>
        </ul>
      )}
    </section>
  );
}
