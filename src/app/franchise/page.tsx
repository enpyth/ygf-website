'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState } from 'react'
import {
    JobDescriptionSection,
    FranchiseSupportSection,
    FAQSection,
    FranchiseeStoriesSection,
    ApplicationProcessSection,
    ApplicationFormSection
} from '@/features/franchise'

export default function FranchisePage() {
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

            const response = await fetch('/api/email/franchise', { method: 'POST', body: formData })
            const result = await response.json()

            if (response.ok) {
                setSubmitStatus('success')
                setSubmitMessage(result.message || 'Franchise inquiry submitted successfully!')
            } else {
                setSubmitStatus('error')
                setSubmitMessage(result.message || result.error || 'Failed to submit franchise inquiry')
            }
        } catch (error) {
            console.error('Error submitting franchise inquiry:', error)
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

    return (
        <>
            <Header />
            <main className="min-h-screen bg-background">
                <PageBanner title={t.franchisePage.hero.title} backgroundImage={backgroundImage[0]} />
                <JobDescriptionSection />
                <FranchiseSupportSection />
                <Separator className="bg-black/10" />
                <FAQSection />
                <Separator className="bg-black/10" />
                <FranchiseeStoriesSection />
                <Separator className="bg-black/10" />
                <ApplicationProcessSection />
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