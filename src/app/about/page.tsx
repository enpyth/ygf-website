'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner'
import { useI18n } from '@/lib/contexts/LanguageContent'
import {
    BrandStorySection,
    JourneySection,
    InnovationSection,
    TeamSection,
    MissionSection
} from '@/features/about'

export default function AboutPage() {
    const t = useI18n()
    const backgroundImage = [
        {
            src: "/Banner.png",
            alt: "Background Image"
        },
    ]

    return (
        <>
            <Header />
            <main className="min-h-screen bg-black">
                <PageBanner title={t.aboutPage.hero.title} backgroundImage={backgroundImage[0]} />
                <BrandStorySection />
                <JourneySection />
                <InnovationSection />
                <TeamSection />
                <MissionSection />
            </main>
            <Footer />
        </>
    )
}
