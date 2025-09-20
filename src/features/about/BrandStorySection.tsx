'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function BrandStorySection() {
    const t = useI18n()

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16 px-4 lg:px-8 xl:px-16 text-center">
                <h2 className="text-4xl font-bold text-black mb-4">Our Brand Story</h2>
                <p className="text-xl text-black max-w-2xl mx-auto">
                    Discover the journey that shaped our company and the values that drive us forward
                </p>
            </div>
        </section>
    )
}
