"use client";

import Header from "@/components/layout/public-header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import { useI18n } from "@/lib/contexts/LanguageContent";
import React from "react";
import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import { ImageTextCard } from "@/components/ui/image-text-card";
import {
  BrandStorySection,
  JourneySection,
  InnovationSection,
  TeamSection,
  MissionSection,
} from "@/features/about";
import { ImageLeftTextRight } from "@/components/ui/image-text-section";

// Unified timeline data structure combining both timeline and card information
const timelineData = [
  {
    id: 1,
    date: "Year 2003",
    image: {
      src: "/timeline/tl-1.png",
      alt: "",
    },
    cardText:
      "In 2003, the first YGF hotpot restaurant was opened in Harbin, China, and became an instant local hit.",
  },
  {
    id: 2,
    date: "Year 2009",
    image: {
      src: "/timeline/tl-2.png",
      alt: "",
    },
    cardText:
      "In 2009, Mr. Guofu Yang has registered his name as a trademark, launched a nationwide franchise program, and built standardised soup base factories and logistics systems.",
  },
  {
    id: 3,
    date: "Year 2010",
    image: {
      src: "/timeline/tl-3.png",
      alt: "",
    },
    cardText:
      "By 2010, YGF had over 1,000 stores, expanding from its Northeastern roots to become a household name across China.",
  },
  {
    id: 4,
    date: "Year 2017",
    image: {
      src: "/timeline/tl-4.png",
      alt: "",
    },
    cardText: "The first YGF international store opened in Canada.",
  },
  {
    id: 5,
    date: "Year 2025",
    image: {
      src: "/timeline/tl-5.png",
      alt: "",
    },
    cardText:
      "By 2025, YGF operates nearly 7,000 stores in over 20 countries worldwide.",
  },
  {
    id: 6,
    date: "Future",
    image: {
      src: "",
      alt: "",
    },
    cardText:
      "Next Milestone",
  },

];

export function TimelineSection() {
  return (
    <div className="container mx-auto py-8 pl-6 pr-6">
      <h2 className="text-3xl font-bold mb-8 text-center text-white">
        Our Brand Story
      </h2>

      {/* Cards above timeline - dynamically generated from timelineData */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mb-4">
      
        {timelineData.map((item, index) => (
          <ImageTextCard
            className={`h-100 ${index === timelineData.length - 1 ? 'text-center' : ''}`}
            key={item.id}
            image={item.image}
            text={item.cardText}
            imageRatio={1}
            textRatio={1}
          />
        ))}
      </div>

      {/* Simple Timeline - dynamically generated from timelineData */}
      <Timeline
        defaultValue={timelineData.length}
        orientation="horizontal"
        className="text-white ml-25"
      >
        {timelineData.map((item) => (
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
  );
}

export default function AboutPage() {
  const t = useI18n();
  const backgroundImage = [
    {
      src: "/Banner.png",
      alt: "Background Image",
    },
  ];
  const LookingAheadImage = [
    {
      src: "/about/vision.jpg",
      alt: "Vision Image",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <PageBanner
          title={t.aboutPage.hero.title}
          backgroundImage={backgroundImage[0]}
        />
        <TimelineSection />
        <div className="bg-white">
          <TeamSection />
        </div>
        <ImageLeftTextRight
          textBackgroundColor="bg-[#A1221F]"
          titleColor="text-white"
          descriptionColor="text-white whitespace-pre-line"
          title="Our Vision"
          description="YGF Australia became the exclusive master franchisee in May 2025, marking a new chapter for the world’s largest hotpot brand. This year, we are opening three new stores, including a landmark AUD 2 million flagship in Adelaide’s Chinatown — set to be the largest hotpot restaurant in Australia. The flagship will combine modern dining with cultural showcases such as Face-Changing Opera Show, Chinese Kung Fu Tea Performance, and Hanfu displays, creating a vibrant hub for multicultural exchange. Looking ahead, our roadmap is clear: 30 stores nationwide by 2028, supported by central kitchens and integrated supply chains. Our vision is to build Australia’s leading hotpot brand — Fresh, authentic, and made your way — while sharing Chinese culture in ways that connect with Australia’s diverse communities."
          image={LookingAheadImage[0]}
        />
      </main>
      <Footer />
    </>
  );
}
