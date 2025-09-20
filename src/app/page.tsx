'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner  from '@/components/layout/PageBanner'
import HomePageBanner from '@/features/home/Banner-shadcn'
import { ImageLeftTextRightWithButton, TextLeftImageRightWithButton } from '@/components/ui/image-text-section'
import { TextImage13, TextImage13WithButton } from '@/components/ui/text-image-1-3'
export default function HomePage() {
  const backgroundImage = [
    {
      src: "/home/title.png",
      alt: "Background Image"
    },
  ]
  const brandImage = [
    {
      src: "/home/brand.png",
      alt: "Brand Image"
    },
  ]

  const NewsImage = [
    {
      src: "/home/lunbo3.png",
      alt: "News Image"
    },
  ]
  const TestimonialsImage = [
    {
      src: "/Banner.png",
      alt: "Testimonials Image"
    },
  ]
  return (
    <>
      <Header />
      <main className="min-h-screen bg-black">
        <HomePageBanner title='' backgroundImage={backgroundImage[0]}/>
        {/* <HeroSection /> */}
        {/* <BrandSection /> */}
        {/* <TestimonialsSection /> */}
        <ImageLeftTextRightWithButton
          image={brandImage[0]}
          title="Our Brand"
          description="With nearly 7,000 stores worldwide, YGF is bringing the authentic taste of hotpot to Australia — fresh, bold, and made for everyone."
          buttonText="LEARN MORE"
        />
        <TextLeftImageRightWithButton
          image={brandImage[0]}
          title="Our Products"
          description="Where taste meets wellness — fresh ingredients, bold flavors, and endless choices for a healthy, delicious hotpot experience."
          buttonText="LEARN MORE"
        />
        <div style={{ position: 'relative' }}>
          <PageBanner
            title={'Our News\nGet 20% OFF ALL DISHES'}
            backgroundImage={NewsImage[0]}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: 'rgba(139, 80, 80, 0.47)',
              pointerEvents: 'none'
            }}
          />
        </div>
        <div style={{ position: 'relative' }}>
        <TextImage13
          image={TestimonialsImage[0]}
          title={'What Our\nClients Say'}
          subtitle="Hear from our satisfied customers about their experience with our services."
          description1="“The signature spicy base is a must-try!” – Rachel T."
          description2="“The broth is so flavorful, and I love how many fresh ingredients I can choose from!” – Emily W."
          description3="“Service was fast and friendly, and the food was top-notch.” – Michael K."
        />
        </div>
      </main>
      <Footer />
    </>
  )
}
