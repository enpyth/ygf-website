'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Building2, Users, TrendingUp, Award } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function WhyWorkWithUsSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t.careersPage.whyWorkWithUs.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.careersPage.whyWorkWithUs.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <Building2 className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.globalBrand.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.careersPage.whyWorkWithUs.globalBrand.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <Users className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.supportiveEnvironment.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.careersPage.whyWorkWithUs.supportiveEnvironment.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <TrendingUp className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.careerDevelopment.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.careersPage.whyWorkWithUs.careerDevelopment.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                                <Award className="w-6 h-6 text-white" />
                            </div>
                            <CardTitle className="text-lg font-semibold">{t.careersPage.whyWorkWithUs.employeeBenefits.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                                {t.careersPage.whyWorkWithUs.employeeBenefits.description}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
