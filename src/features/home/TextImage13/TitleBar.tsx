"use client";

import React from "react";

export interface TitleBarProps {
  title: string;
}

export function TitleBar({ title }: TitleBarProps) {
  return (
    <div className="flex w-full items-center justify-center bg-black px-5 py-4 text-white sm:px-6">
      <h2 className="text-center text-2xl font-bold sm:text-3xl">
        {title.split("\n").map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </h2>
    </div>
  );
}

export default TitleBar;
