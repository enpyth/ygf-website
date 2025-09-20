'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'
import { FAQSection as FAQSectionComponent } from '@/components/ui/faq-section'

export function FAQSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                        {t.franchisePage.faq.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-3 max-w-4xl mx-auto">
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.applicationProcess.title}
                        questions={t.franchisePage.faq.sections.applicationProcess.questions}
                    />
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.financeCosts.title}
                        questions={t.franchisePage.faq.sections.financeCosts.questions}
                    />
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.trainingSupport.title}
                        questions={t.franchisePage.faq.sections.trainingSupport.questions}
                    />
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.siteLease.title}
                        questions={t.franchisePage.faq.sections.siteLease.questions}
                    />
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.returnsOperations.title}
                        questions={t.franchisePage.faq.sections.returnsOperations.questions}
                    />
                    <FAQSectionComponent
                        title={t.franchisePage.faq.sections.citizenshipEligibility.title}
                        questions={t.franchisePage.faq.sections.citizenshipEligibility.questions}
                    />
                </div>
            </div>
        </section>
    )
}
