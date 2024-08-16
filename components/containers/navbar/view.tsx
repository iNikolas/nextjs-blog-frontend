/* eslint-disable jsx-a11y/control-has-associated-label */
import Link from "next/link";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ThemeToggle } from "@/components/presentational";

export function Navbar() {
  return (
    <nav className="bg-base-100 shadow-md w-full top-0 left-0 z-50 mb-4">
      <div className="max-w-[1120px] mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="text-2xl font-bold text-primary hover:text-primary-focus transition-colors duration-300"
          >
            Personal Blog
          </Link>
        </div>

        <div className="hidden sm:flex items-center space-x-6">
          <ThemeToggle />
        </div>

        <div className="sm:hidden">
          <div className="dropdown dropdown-end z-10">
            <button
              type="button"
              tabIndex={0}
              aria-label="Open menu"
              className="btn btn-ghost"
            >
              <GiHamburgerMenu className="h-6 w-6 text-primary" />
            </button>
            <ul className="dropdown-content mt-2 p-2 shadow bg-base-100 rounded-box w-48">
              <li className="mt-2">
                <button
                  type="button"
                  className="w-full px-4 py-2 text-base font-medium text-base-content hover:bg-base-200 rounded"
                >
                  <ThemeToggle />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
