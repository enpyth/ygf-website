'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, HeadphonesIcon, MapPin, Award, CheckCircle } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function ApplicationProcessSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t.franchisePage.process.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.franchisePage.process.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <FileText className="w-8 h-8 text-blue-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary/80 text-white rounded-full text-sm font-semibold">
                                    1
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.enquire.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.enquire.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <HeadphonesIcon className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                                    2
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.franchiseMeeting.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.franchiseMeeting.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <MapPin className="w-8 h-8 text-purple-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                                    3
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.siteSelection.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.siteSelection.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <FileText className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                                    4
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.legalDocuments.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.legalDocuments.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <Award className="w-8 h-8 text-red-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                                    5
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.training.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.training.description}
                            </p>
                        </CardContent>
                    </Card>

                    <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 bg-primary/5">
                        <CardContent>
                            <div className="flex justify-center mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <div className="mb-3">
                                <span className="inline-flex items-center justify-center w-8 h-8 bg-primary text-white rounded-full text-sm font-semibold">
                                    6
                                </span>
                            </div>
                            <h3 className="text-lg font-semibold text-foreground mb-3">
                                {t.franchisePage.process.steps.opening.title}
                            </h3>
                            <p className="text-foreground text-sm leading-relaxed">
                                {t.franchisePage.process.steps.opening.description}
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
