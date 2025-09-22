'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState } from 'react'
import {
    WhyWorkWithUsSection,
    CurrentOpeningsSection,
    AdditionalInfoSection,
    ApplicationFormSection
} from '@/features/careers'
import { Card, CardHeader, CardContent, CardTitle } from '@/components/ui/card'
import { Building2, Users } from 'lucide-react'
import { TrendingUp } from 'lucide-react'
import { Award } from 'lucide-react'

export default function CareersPage() {
    const t = useI18n()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
    const [submitMessage, setSubmitMessage] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitStatus('idle')
        setSubmitMessage('')

        try {
            const formData = new FormData(e.currentTarget)

            const response = await fetch('/api/email/careers', { method: 'POST', body: formData })
            const result = await response.json()

            if (response.ok) {
                setSubmitStatus('success')
                setSubmitMessage(result.message || 'Job application submitted successfully!')
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || result.error || 'Failed to submit job application')
            }
        } catch (error) {
            console.error('Error submitting job application:', error)
            setSubmitStatus('error')
            setSubmitMessage('An unexpected error occurred. Please try again.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const backgroundImage = [
        {
            src: "/about/title.png",
            alt: "Background Image"
        },
    ]
    const WhyWorkWithUsImage = [
        {
            src: "/franchise/training.png",
            alt: "Background Image"
        },
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <PageBanner title={t.careersPage.hero.title} backgroundImage={backgroundImage[0]} />
                <PageBanner title={''} subtitle={t.careersPage.whyWorkWithUs.subtitle} backgroundImage={WhyWorkWithUsImage[0]} />
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
                <CurrentOpeningsSection />
                <Separator className="bg-black/10" />
                <ApplicationFormSection
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    submitStatus={submitStatus}
                    submitMessage={submitMessage}
                />
            </main>
            <Footer />
        </>
    )
}
