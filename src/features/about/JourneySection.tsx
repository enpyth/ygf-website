'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function JourneySection() {
    const t = useI18n()

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="order-2 lg:order-1">
                        <img
                            src="/about/mainbuilding.png"
                            alt="Our Journey Begins"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                    <div className="order-1 lg:order-2">
                        <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.journey.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                            {t.aboutPage.story.journey.description1}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {t.aboutPage.story.journey.description2}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
