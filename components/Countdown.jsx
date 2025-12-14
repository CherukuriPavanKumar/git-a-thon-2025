"use client";

import { useState, useEffect } from "react";

export default function Countdown({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    Days: "00",
    Hours: "00",
    Minutes: "00",
    Seconds: "00",
  });

  useEffect(() => {
    // Use the targetDate prop or default to December 20, 2025 at 9:00 AM
    const target = new Date(targetDate || "2025-12-20T09:00:00").getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          Days: "00",
          Hours: "00",
          Minutes: "00",
          Seconds: "00",
        });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        Days: days.toString().padStart(2, "0"),
        Hours: hours.toString().padStart(2, "0"),
        Minutes: minutes.toString().padStart(2, "0"),
        Seconds: seconds.toString().padStart(2, "0"),
      });
    };

    // Initial update
    updateCountdown();

    // Update every second
    const timer = setInterval(updateCountdown, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="text-center">
      <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-5 md:mb-6">
        Hackathon starts in
      </h3>

      <div className="flex justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-gray-800 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-lg flex flex-col items-center justify-center"
          >
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold text-blue-500">
              {value}
            </span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mt-1">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
