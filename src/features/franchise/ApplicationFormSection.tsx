'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { HeadphonesIcon } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'
import FranchiseForm, { type FranchiseFormRef } from '@/components/form/franchise-form'
import { useRef } from 'react'

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
    const franchiseFormRef = useRef<FranchiseFormRef>(null)
    const formRef = useRef<HTMLFormElement>(null)

    return (
        <section id="franchise-form" className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {t.franchisePage.application.title}
                        </h2>
                        <p className="text-xl text-muted-foreground">
                            {t.franchisePage.application.subtitle}
                        </p>
                    </div>

                    <Card className="p-8 bg-white dark:bg-black">
                        <CardHeader className="pb-6">
                            <CardTitle className="text-2xl font-semibold flex items-center gap-2">
                                <HeadphonesIcon className="w-6 h-6 text-blue-600" />
                                {t.franchisePage.application.formTitle}
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

                                <FranchiseForm
                                    buttonLabel={isSubmitting ? t.franchisePage.application.submittingButton : t.franchisePage.application.submitButton}
                                    isSubmitting={isSubmitting}
                                    ref={franchiseFormRef}
                                />
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
