"use client";

import React from "react";

export interface OverlayTriptychProps {
  messages: string[];
}

export function OverlayTriptych({ messages }: OverlayTriptychProps) {
  const count = Math.max(1, Math.min(messages.length, 6));
  const backgroundClasses = [
    "bg-red-900/90",
    "bg-gray-500/30",
    "bg-red-900/90",
    "bg-gray-500/30",
    "bg-gray-500/30",
    "bg-red-900/80",
  ];
  return (
    <div className="absolute inset-0 grid grid-cols-1 overflow-y-auto sm:grid-cols-2 lg:flex lg:overflow-hidden">
      {messages.slice(0, count).map((msg, idx) => (
        <div
          key={idx}
          className={`${backgroundClasses[idx % backgroundClasses.length]} flex items-center justify-center p-4 sm:p-6 lg:flex-1 lg:p-8`}
        >
          <p
            className={`px-2 py-3 text-left font-medium italic text-white sm:px-4 sm:py-4 ${idx % 2 === 1 ? "text-sm sm:text-base" : "text-base sm:text-lg"}`}
            style={{ maxWidth: "22rem", width: "100%" }}
          >
            {msg}
          </p>
        </div>
      ))}
    </div>
  );
}

export default OverlayTriptych;
