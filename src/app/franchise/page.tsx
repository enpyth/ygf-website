"use client";

import Header from "@/components/layout/public-header";
import Footer from "@/components/layout/Footer";
import PageBanner from "@/components/layout/PageBanner";
import { Separator } from "@/components/ui/separator";
import { useI18n } from "@/lib/contexts/LanguageContent";
import { useState, useRef } from "react";
import { ImageTextSection } from "@/components/ui/image-text-section";
import {
  JobDescriptionSection,
  FranchiseSupportSection,
  FAQSection,
  FranchiseeStoriesSection,
  ApplicationProcessSection,
  ApplicationFormSection,
} from "@/features/franchise";
import { type FranchiseFormRef } from "@/components/form/franchise-form";
import { TextLeftImageRight } from "@/components/ui/image-text-section";
import { ColorSeparator } from "@/components/ui/color-separator";
import { TitleImageSection } from "@/components/ui/title-image-section";
import Image from "next/image";

export default function FranchisePage() {
  const t = useI18n();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const franchiseFormRef = useRef<FranchiseFormRef>(null as any);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    try {
      const formData = new FormData(e.currentTarget);
      
      // Add resume file if it exists
      const resumeFile = franchiseFormRef.current?.getResumeFile();
      if (resumeFile) {
        formData.append('resume', resumeFile);
      }
      
      // Add receipt file if it exists
      const receiptFile = franchiseFormRef.current?.getReceiptFile();
      if (receiptFile) {
        formData.append('receipt', receiptFile);
      }

      const response = await fetch("/api/email/franchise", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message || "Franchise inquiry submitted successfully!"
        );
      } else {
        setSubmitStatus("error");
        setSubmitMessage(
          result.message || result.error || "Failed to submit franchise inquiry"
        );
      }
    } catch (error) {
      console.error("Error submitting franchise inquiry:", error);
      setSubmitStatus("error");
      setSubmitMessage("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const backgroundImage = [
    {
      src: "/Banner.png",
      alt: "Background Image",
    },
  ];
  const PartnerWith = [
    {
      src: "/franchise/partner.png",
      alt: "Partner Section Image",
    },
  ];

  const SupportImage = [
    {
      src: "/franchise/support.png",
      alt: "Support Section Image",
    },
  ];
  const ProcessImage = [
    {
      src: "/franchise/process.png",
      alt: "Process Section Image",
    },
  ];
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <PageBanner
          title="Franchising Opportunities"
          backgroundImage={backgroundImage[0]}
        />
        {/* <ColorSeparator
                    title='Partner with YGF Australia'
                    backgroundColor="bg-[#82000C]"
                    titleColor="text-white text-left "
                    descriptionColor="text-white"
                /> */}
        <div className="bg-[#82000C] p-10">
          <TextLeftImageRight
            title="Partner with YGF Australia"
            description="Become a part of the rapidly growing dining market with a YGF Australia franchise. Our authentic hotpot recipes, modern restaurant design, and innovative service model deliver an unparalleled experience. As a franchisee, you’ll gain access to proven systems, comprehensive training, and expert marketing support."
            image={PartnerWith[0]}
            textBackgroundColor="bg-[#82000C]"
            titleColor="text-white text-left text-4xl pb-10"
            descriptionColor="text-white text-2xl"
          />
        </div>
        <div className="w-full h-auto p-16 bg-white">
          <Image
            src="/franchise/advantage.png"
            alt="Smart Points System"
            className="w-full rounded-lg shadow-lg"
            width={1000}
            height={1000}
          />
        </div>

        <FAQSection />

        <Separator className="bg-black/10" />

        <FranchiseeStoriesSection
          backgroundImage={{
            src: "/franchise/story.png",
            alt: "Franchise background",
          }}
          overlayColor="rgb(191, 84, 75)"
          overlayOpacity={0.7}
        />

        <div className="bg-white flex justify-center items-center p-24">
          <Image
            className="object-cover w-full h-full"
            src="/franchise/process.png"
            alt="Franchise background"
            width={1000}
            height={1000}
          />
        </div>

        <div className="bg-white">
          <ApplicationFormSection
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitStatus={submitStatus}
            submitMessage={submitMessage}
            franchiseFormRef={franchiseFormRef}
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
