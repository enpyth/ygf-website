"use client";

import { useI18n } from "@/lib/contexts/LanguageContent";
// 'use client'

import Image from "next/image";

type PageBannerProps = {
  title: string;
  subtitle?: string;
  backgroundImage?: {
    src: string;
    alt: string;
  };
};

export default function HomePageBanner({
  title,
  subtitle,
  backgroundImage,
}: PageBannerProps) {
  const t = useI18n();

  return (
    <section className="relative overflow-hidden py-80">
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
          <div className="absolute inset-0"></div>
          <div className="relative z-30 flex h-full w-full items-center justify-center">
            <div className="mx-auto max-w-5xl px-5 text-center sm:px-6">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-white [text-shadow:_0_4px_8px_rgb(var(--primary)_/_0.4)] sm:text-4xl md:mb-6 md:text-6xl lg:text-7xl">
                {t.homePage.hero.title}
              </h1>
              <p className="mx-auto mb-3 max-w-4xl text-base leading-relaxed text-white [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)] sm:text-xl md:mb-4 md:text-3xl">
                {t.homePage.hero.subtitle}
              </p>
              <p className="mx-auto max-w-3xl text-sm leading-relaxed text-white [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)] sm:text-base md:text-xl">
                {t.homePage.hero.extraText}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="mb-6 text-4xl font-bold text-white [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:text-black dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)] md:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mx-auto max-w-2xl text-xl text-white [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:text-black dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}

// export default function Banner() {
//     const t = useI18n()

//     return (
//         <section className="py-16 bg-muted/50">
//             <div className="container mx-auto px-4">
//                 <div className="text-center">
//                     <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
//                         {t.banner.title}
//                     </h1>
//                     <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//                         {t.banner.subtitle}
//                     </p>
//                 </div>
//             </div>
//         </section>
//     )
// }
