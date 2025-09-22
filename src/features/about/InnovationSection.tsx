'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function InnovationSection() {
    const t = useI18n()

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">{t.aboutPage.story.innovation.title}</h2>
                        <p className="text-lg text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                            {t.aboutPage.story.innovation.description1}
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed whitespace-pre-line">
                            {t.aboutPage.story.innovation.description2}
                        </p>
                    </div>
                    <div>
                        <img
                            src="/about/ygf_au.png"
                            alt="Innovation at Our Core"
                            className="rounded-lg shadow-lg w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
