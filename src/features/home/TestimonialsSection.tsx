'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'
import RotatingTestimonials from '@/features/testimonials/RotatingTestimonials'

export function TestimonialsSection() {
    const t = useI18n()

    return (
        <section className="py-20 bg-muted/30">
            <div className="w-full px-4 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">{t.homePage.testimonials.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.homePage.testimonials.subtitle}
                    </p>
                </div>

                <RotatingTestimonials />
            </div>
        </section>
    )
}
