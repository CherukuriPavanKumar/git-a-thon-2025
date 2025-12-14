"use client";

export default function Footer() {
  return (
    <footer className="bg-[#0f1214] border-t border-[#1f2628] relative">
      {/* Top content (limited width) */}
      <div className="max-w-7xl mx-auto py-10">
        <div>
          <h3 className="text-blue-500 font-semibold text-lg">EPOCH 4.0</h3>
          <p className="text-sm text-gray-400">GitHub Community GITAM</p>
          <p className="text-xs text-gray-500 mt-1">
            Part of the EPOCH 4.0 Tech Fest
          </p>
        </div>
      </div>

      {/* ✅ FULL-WIDTH DIVIDER */}
      <div className="w-full h-px bg-[#1f2628]" />

      {/* Bottom text (limited width again) */}
      <div className="max-w-7xl mx-auto py-6">
        <p className="text-xs text-gray-500 text-center">
          © 2025 EPOCH 4.0 Hackathon. All rights reserved.
        </p>
      </div>

      {/* Socials — bottom right */}
      <div className="absolute bottom-6 right-6 flex gap-3 my-[-10]">
        <a className="bg-[#161b22] hover:bg-[#21262d] text-gray-300 px-3 py-2 rounded-md text-sm transition cursor-target">
          git
        </a>
        <a className="bg-[#161b22] hover:bg-[#21262d] text-gray-300 px-3 py-2 rounded-md text-sm transition cursor-target">
          insta
        </a>
        <a className="bg-[#161b22] hover:bg-[#21262d] text-gray-300 px-3 py-2 rounded-md text-sm transition cursor-target">
          in
        </a>
      </div>
    </footer>
  );
}
