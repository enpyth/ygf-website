'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'
import { ExpandableCard } from '@/components/ui/expandable-card'

export function FranchiseSupportSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t.franchisePage.franchiseSupport.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.franchisePage.franchiseSupport.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-1 gap-3 max-w-4xl mx-auto">
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.locationAdvisory.title}
                        description={t.franchisePage.franchiseSupport.locationAdvisory.description}
                    />
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.initialTraining.title}
                        description={t.franchisePage.franchiseSupport.initialTraining.description}
                    />
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.designFitout.title}
                        description={t.franchisePage.franchiseSupport.designFitout.description}
                    />
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.preOpeningSupport.title}
                        description={t.franchisePage.franchiseSupport.preOpeningSupport.description}
                    />
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.marketingPromotion.title}
                        description={t.franchisePage.franchiseSupport.marketingPromotion.description}
                    />
                    <ExpandableCard
                        title={t.franchisePage.franchiseSupport.ongoingSupport.title}
                        description={t.franchisePage.franchiseSupport.ongoingSupport.description}
                    />
                </div>
            </div>
        </section>
    )
}
