'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'
// 'use client'

import Image from 'next/image'

type PageBannerProps = {
    title: string
    subtitle?: string
    backgroundImage?: {
        src: string
        alt: string
    }
}

export default function HomePageBanner({ title, subtitle, backgroundImage }: PageBannerProps) {
    
    const t = useI18n()
    return (
        <section className="relative py-75 overflow-hidden mb-1">
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
                    <div className="relative z-30 flex items-center justify-center h-full w-full">
                        <div className="text-center px-4">
                            <h1 className="text-5xl md:text-7xl font-bold bg-black text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(var(--primary)_/_0.4)]">
                                {t.homePage.hero.title}
                            </h1>
                            <p className="text-xl md:text-3xl bg-black text-white dark:text-black mb-4 max-w-4xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                                {t.homePage.hero.subtitle}
                            </p>
                            <p className="text-lg md:text-xl bg-black text-white dark:text-black mb-8 max-w-3xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                                {t.homePage.hero.extraText}
                            </p>
                        </div>
                    </div>
                </div>
            )}

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
                    {title}
                </h1>
                {subtitle ? (
                    <p className="text-xl text-white dark:text-black max-w-2xl mx-auto [text-shadow:_0_2px_4px_rgb(0_0_0_/_0.3)] dark:[text-shadow:_0_2px_4px_rgb(255_255_255_/_0.3)]">
                        {subtitle}
                    </p>
                ) : null}
            </div>
        </section>
    )
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
