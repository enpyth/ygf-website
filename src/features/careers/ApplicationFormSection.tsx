'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HeadphonesIcon } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'
import CareersEmail, { type CareersEmailRef } from '@/components/form/careers-email'
import { useRef, useState } from 'react'

interface ApplicationFormSectionProps {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>
    isSubmitting: boolean
    submitStatus: 'idle' | 'success' | 'error'
    submitMessage: string
}

export function ApplicationFormSection({
    onSubmit,
    isSubmitting,
    submitStatus,
    submitMessage
}: ApplicationFormSectionProps) {
    const t = useI18n()
    const careersEmailRef = useRef<CareersEmailRef>(null)
    const formRef = useRef<HTMLFormElement>(null)

    const positions = [
        { value: 'front-of-house', label: t.careersPage.currentOpenings.positions.frontOfHouse.title },
        { value: 'kitchen-staff', label: t.careersPage.currentOpenings.positions.kitchenStaff.title },
        { value: 'shift-leader', label: t.careersPage.currentOpenings.positions.shiftLeaders.title },
        { value: 'store-manager', label: t.careersPage.currentOpenings.positions.shiftLeaders.title },
        { value: 'head-office', label: t.careersPage.currentOpenings.positions.headOffice.title },
        { value: 'other', label: 'Other' },
    ]

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t.careersPage.application.title}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t.careersPage.application.subtitle}
                        </p>
                    </div>

                    <Card className="p-8 bg-white dark:bg-black">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                {t.careersPage.application.formTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={onSubmit} className="space-y-6" ref={formRef}>
                                {/* Submit Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                                        <p className="text-green-800 dark:text-green-200 text-sm">
                                            {submitMessage}
                                        </p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
                                        <p className="text-red-800 dark:text-red-200 text-sm">
                                            {submitMessage}
                                        </p>
                                    </div>
                                )}

                                <CareersEmail
                                    buttonLabel={isSubmitting ? t.careersPage.application.submittingButton : t.careersPage.application.submitButton}
                                    positions={positions}
                                    isSubmitting={isSubmitting}
                                    ref={careersEmailRef}
                                />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
