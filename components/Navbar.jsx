"use client";

import TargetCursor from "./hovereffect";

export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 z-50 w-full">
      <TargetCursor
        spinDuration={2}
        hideDefaultCursor={true}
        parallaxOn={true}
      />

      <div className="flex w-full items-center justify-between px-8 py-4">
        {/* LEFT LOGO */}
        <div
          className="flex flex-col items-center select-none cursor-target"
          onClick={scrollToTop}
        >
          <img
            src="/icons/EPOCH.svg"
            alt="Epoch 4.0 Logo"
            className="h-12 w-auto cursor-pointer"
          />
        </div>

        {/* RIGHT NAV LINKS */}
        <ul className="flex items-center gap-10">
          <li
            onClick={scrollToTop}
            className="cursor-pointer cursor-target p-1 text-[15px] font-inter font-semibold text-[#E6EDF3] hover:text-white transition"
          >
            Home
          </li>
        </ul>
      </div>
    </nav>
  );
}
