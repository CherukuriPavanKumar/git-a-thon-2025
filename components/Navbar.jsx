"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0f1214]">
      <div className="w-full px-8 py-4 flex items-center justify-between">
        {/* LEFT LOGO */}
        <div className="flex flex-col items-center select-none">
          <img
            src="/icons/EPOCH.svg"
            alt="Epoch 4.0 Logo"
            className="h-11 w-auto"
          />

          <span className="text-[#C9D1D9] text-[14px] font-inter font-medium mt-[-5px]">
            GitHub Community GITAM
          </span>
        </div>

        {/* RIGHT NAV LINKS */}
        <ul className="flex items-center gap-10">
          <Link
            href="/"
            className="text-[#E6EDF3] text-[15px] font-inter hover:text-white"
          >
            Home
          </Link>

          <li className="text-[#E6EDF3] text-[15px] font-inter hover:text-white cursor-pointer">
            Registration
          </li>

          <Link
            href="/probstmts"
            className="text-[#E6EDF3] text-[15px] font-inter hover:text-white"
          >
            Problem Statements
          </Link>
        </ul>
      </div>
    </nav>
  );
}
