"use client";

import Image from "next/image";
import React from "react";
import { Button } from "@mui/material";
import Link from "next/link";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  redirectTo?: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
};

export default function PageBanner({
  title,
  subtitle,
  backgroundImage,
  redirectTo,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden py-24 sm:py-28 md:py-40">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-red-900/60"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-5 text-center sm:px-6">
        <h1 className="mb-5 text-3xl font-bold text-white [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:text-black dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)] sm:text-4xl md:mb-6 md:text-6xl">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        {subtitle ? (
          <h2 className="mx-auto mb-8 max-w-2xl text-2xl font-bold text-white [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:text-black dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)] sm:text-3xl md:text-5xl">
            {subtitle}
          </h2>
        ) : null}

        {/* Membership Button */}
        <Link href={redirectTo || "/"}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#991b1b",
              color: "white",
              border: "2px solid white",
              borderRadius: "48px",
              px: { xs: 3, sm: 4 },
              py: { xs: 1.5, sm: 2 },
              fontSize: { xs: "14px", sm: "16px" },
              fontWeight: 600,
              boxShadow: "0 4px 16px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                backgroundColor: "#b91c1c",
                border: "2px solid white",
                transform: "translateY(-2px)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
              },
              transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              textTransform: "none",
            }}
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </section>
  );
}
