'use client'

import { Card } from '@/components/ui/card'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function JobDescriptionSection() {
    const t = useI18n()

    return (
        <section className="py-20 white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="max-w-6xl mx-auto">
                    <div className="flex mb-12">
                        <div className="w-1/6"></div>
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                            {t.franchisePage.jobDescription.title}
                        </h2>
                    </div>

                    <Card className="p-8 bg-white dark:bg-black">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div>
                                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                                    {t.franchisePage.jobDescription.description1}
                                </p>
                                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                                    {t.franchisePage.jobDescription.description2}
                                </p>
                                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                                    {t.franchisePage.jobDescription.description3}
                                </p>
                                <p className="text-lg text-muted-foreground mb-3 leading-relaxed">
                                    {t.franchisePage.jobDescription.description4}
                                </p>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    {t.franchisePage.jobDescription.description5}
                                </p>
                            </div>
                            <div>
                                <img
                                    src="/franchise/ygf.png"
                                    alt="Franchise Partner Role"
                                    className="w-full rounded-lg shadow-lg"
                                />
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    )
}
