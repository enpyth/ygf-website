'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function MissionSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16 text-center">
                <h2 className="text-4xl font-bold text-foreground mb-8">{t.aboutPage.mission.title}</h2>
                <div className="max-w-4xl mx-auto">
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                        {t.aboutPage.mission.description1}
                    </p>
                    <p className="text-xl text-muted-foreground mb-6 leading-relaxed whitespace-pre-line">
                        {t.aboutPage.mission.description2}
                    </p>
                    <p className="text-xl text-muted-foreground leading-relaxed whitespace-pre-line">
                        {t.aboutPage.mission.description3}
                    </p>
                </div>
            </div>
        </section>
    )
}
