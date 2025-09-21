'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner'
import { useI18n } from '@/lib/contexts/LanguageContent'
import React from 'react'
import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"
import { ImageTextCard } from "@/components/ui/image-text-card"
import {
    BrandStorySection,
    JourneySection,
    InnovationSection,
    TeamSection,
    MissionSection
} from '@/features/about'
import { ImageLeftTextRight } from '@/components/ui/image-text-section'

// Timeline data with 5 time points
const timelineItems = [
    {
        id: 1,
        date: "Jan 2020",
        title: "Company Founded",
        description: "Started our journey with a vision to revolutionize the industry."
    },
    {
        id: 2,
        date: "Jun 2021",
        title: "First Product Launch",
        description: "Launched our flagship product to the market."
    },
    {
        id: 3,
        date: "Dec 2022",
        title: "Series A Funding",
        description: "Secured $10M in Series A funding to accelerate growth."
    },
    {
        id: 4,
        date: "Mar 2023",
        title: "International Expansion",
        description: "Expanded operations to 15 countries worldwide."
    },
    {
        id: 5,
        date: "Sep 2024",
        title: "IPO Preparation",
        description: "Preparing for initial public offering."
    },
]

// Card data for the 5 cards above timeline
const cardItems = [
    {
        image: {
            src: "/images/timeline/founded.jpg",
            alt: "Company founding moment"
        },
        text: "We started our journey with a vision to revolutionize the industry and create innovative solutions."
    },
    {
        image: {
            src: "/images/timeline/launch.jpg",
            alt: "Product launch celebration"
        },
        text: "Our first product launch marked a milestone in our company's growth and market presence."
    },
    {
        image: {
            src: "/images/timeline/funding.jpg",
            alt: "Series A funding announcement"
        },
        text: "Securing Series A funding enabled us to scale our operations and reach new markets."
    },
    {
        image: {
            src: "/images/timeline/expansion.jpg",
            alt: "International office opening"
        },
        text: "Our international expansion brought our solutions to customers across 15 countries."
    },
    {
        image: {
            src: "/images/timeline/ipo.jpg",
            alt: "IPO preparation meeting"
        },
        text: "Preparing for IPO represents the next chapter in our company's growth story."
    },
]

export function TimelineSection() {
    return (
        <div className="container mx-auto py-8 pl-6 pr-6">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Our Brand Story</h2>

            {/* 5 Cards above timeline */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-4">
                {cardItems.map((item, index) => (
                    <ImageTextCard
                        className="h-100"
                        key={index}
                        image={item.image}
                        text={item.text}
                        imageRatio={1}
                        textRatio={1}
                    />
                ))}
            </div>

            {/* Simple Timeline */}
            <Timeline defaultValue={5} orientation="horizontal" className="text-white">
                {timelineItems.map((item) => (
                    <TimelineItem key={item.id} step={item.id}>
                        <TimelineHeader>
                            <TimelineSeparator />
                            <TimelineDate>{item.date}</TimelineDate>
                            
                            <TimelineIndicator />
                        </TimelineHeader>
                        
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

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
                <TimelineSection />
                <div className="bg-white">
                    <TeamSection />
                </div>
                <ImageLeftTextRight
                    textBackgroundColor='bg-[#A1221F]'
                    titleColor='text-white'
                    descriptionColor='text-white'
                    title="Looking Ahead"
                    description={[
                        "• November 2025: Marion store opens (South Australia)",
                        "• Flagship on Gouger Street, Adelaide, plus Brisbane CBD launch",
                        "• Continued growth with two new SA stores",
                        "• Sydney flagship opening",
                        "• 30 YGF stores nationwide, establishing YGF as the leading Malatang brand in Australia",
                    ].map((line, index) => (
                        <React.Fragment key={index}>
                            {line}
                            <br />
                        </React.Fragment>
                    ))}
                    image={backgroundImage[0]}
                />

            </main>
            <Footer />
        </>
    )
}
