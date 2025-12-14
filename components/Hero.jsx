"use client";

import React from "react";
import Countdown from "./Countdown";

export default function Hero() {
  const handleRegisterClick = () => {
    const registerSection = document.getElementById("Register");
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="text-white min-h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 py-20 overflow-visible">
      {/* Title */}
      <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-mono leading-[1.1] mb-3 sm:mb-4">
        GIT-A-THON
      </h1>
      {/* <h2 className="font-medium my-2 text-[clamp(1.5rem,5vw,2.5rem)] leading-snug">
        24-Hour Hackathon
      </h2> */}
      <p className="text-gray-300 text-base sm:text-lg md:text-xl lg:text-2xl font-mono max-w-2xl mb-10 sm:mb-12 md:mb-14">
        Code through the night. Build for impact.
      </p>
      {/* Description
      <p className="text-gray-400 max-w-3xl mb-8 text-[clamp(0.875rem,2vw,1.125rem)] leading-relaxed mt-3">
        EPOCH 4.0 Hackathon is a 24-hour, on-site coding marathon where teams
        solve real-world problem statements with a strong focus on user
        experience, creativity, functionality, and completeness.
      </p> */}
      {/* Tags */}
      {/* <div className="flex flex-wrap justify-center gap-4 mb-8">
        <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          ⏱ 24-Hour Hackathon
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          👥 50 Teams • 200-300 Participants
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          📍 GITAM University
        </div>
        <div className="bg-gray-800 px-4 py-2 rounded-full flex items-center gap-2">
          ⭐ GitHub • ACM • IEEE • AWS SIG
        </div>
      </div> */}
      {/* Countdown */}
      <div className="w-full max-w-4xl mb-6 sm:mb-8 md:mb-10">
        <Countdown targetDate="2025-12-20T09:00:00" />
      </div>
      {/* Buttons */}
      <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
        <button
          onClick={handleRegisterClick}
          className="bg-green-500 hover:bg-green-600 px-6 sm:px-8 py-3 sm:py-3.5 rounded-md font-semibold text-sm sm:text-base transition-colors duration-200 cursor-pointer cursor-target"
        >
          Register Your Team
        </button>
      </div>
    </section>
  );
}
