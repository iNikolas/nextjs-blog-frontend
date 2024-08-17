/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from "next/link";
import React from "react";

import { ThemeToggle } from "@/components/presentational";
import { links } from "@/config";
import { HamburgerMenu } from "./components";

export function Navbar() {
  const navigation = Object.values(links);
  return (
    <nav className="bg-base-100 shadow-md w-full mb-4">
      <div className="max-w-content mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link href="/" className="text-2xl font-bold link-primary">
            Personal Blog
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          {navigation.map((link) => (
            <Link className="link-primary" key={link.src} href={link.src}>
              {link.name}
            </Link>
          ))}
          <ThemeToggle />
        </div>

        <div className="sm:hidden">
          <div className="dropdown dropdown-end z-10">
            <HamburgerMenu data={navigation} />
          </div>
        </div>
      </div>
    </nav>
  );
}
