'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner'
import { Separator } from '@/components/ui/separator'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState } from 'react'
import { ImageTextSection } from '@/components/ui/image-text-section'
import {
    JobDescriptionSection,
    FranchiseSupportSection,
    FAQSection,
    FranchiseeStoriesSection,
    ApplicationProcessSection,
    ApplicationFormSection
} from '@/features/franchise'
import { TextLeftImageRight } from '@/components/ui/image-text-section'
import { ColorSeparator } from '@/components/ui/color-separator'
import { TitleImageSection } from '@/components/ui/title-image-section'


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
            src: "/Banner.png",
            alt: "Background Image"
        },
    ]
    const PartnerWith = [
        {
            src: "/franchise/ygf.png",
            alt: "Partner Section Image"
        },
    ]

    const SupportImage = [
        {
            src: "/franchise/support.png",
            alt: "Support Section Image"
        },
    ]
    const ProcessImage = [
        {
            src: "/franchise/process.png",
            alt: "Process Section Image"
        },
    ]
    return (
        <>
            <Header />
            <main className="min-h-screen bg-black">
                <PageBanner title={t.franchisePage.hero.title} backgroundImage={backgroundImage[0]} />
                <ColorSeparator
                    title='Partner with YGF Australia'
                    backgroundColor="bg-[#82000C]"
                    titleColor="text-white text-left "
                    descriptionColor="text-white"
                />
                <div className='bg-[#82000C] p-10'>
                <TextLeftImageRight
                    textBackgroundColor="bg-[#82000C]"
                    image={PartnerWith[0]}
                    title=''
                    description='Become a part of the rapidly growing dining market with a YGF Australia franchise. Our authentic hotpot recipes, modern restaurant design, and innovative service model deliver an unparalleled experience. As a franchisee, you’ll gain access to proven systems, comprehensive training, and expert marketing support.
'
                    titleColor="text-white"
                    descriptionColor="text-white text-2xl"
                    
                />
                </div>
                
                <TitleImageSection
                    image={SupportImage[0]}
                    title=''
                    description=''
                    backgroundColor="bg-white"
                    titleColor="text-black text-center"
                />
                <FAQSection/>
                <Separator className="bg-black/10" />
                <FranchiseeStoriesSection
                    backgroundImage={{ src: '/franchise/story.png', alt: 'Franchise background' }}
                    overlayColor="rgb(191, 84, 75)"
                    overlayOpacity={0.7}
                />
                <TitleImageSection
                    image={ProcessImage[0]}
                    title=''
                    description=''
                    backgroundColor="bg-white"
                    titleColor="text-black text-center"
                />
                <div className='bg-white'>
                <ApplicationFormSection
                    onSubmit={handleSubmit}
                    isSubmitting={isSubmitting}
                    submitStatus={submitStatus}
                    submitMessage={submitMessage}
                />
                </div>
            </main>
            <Footer />
        </>
    )
}