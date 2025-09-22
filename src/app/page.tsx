'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner  from '@/components/layout/PageBanner2'
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
  const moduleImage = [
    {
      src: "/home/module1.png",
      alt: "Brand Image"
    },
    {
      src: "/home/module2.jpg",
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
          image={moduleImage[0]}
          title="Our Brand"
          description="With nearly 7,000 stores worldwide, YGF is bringing the authentic taste of hotpot to Australia — fresh, bold, and made for everyone."
          buttonText="LEARN MORE"
          redirectTo="/franchise"
        />
        <TextLeftImageRightWithButton
          image={moduleImage[1]}
          title="Our Products"
          description="Where taste meets wellness — fresh ingredients, bold flavors, and endless choices for a healthy, delicious hotpot experience."
          buttonText="LEARN MORE"
          redirectTo="/products"
        />
        <div style={{ position: 'relative' }}>
          <PageBanner
            title={'Our News'}
            subtitle="Get 20% OFF ALL DISHES"
            backgroundImage={NewsImage[0]}
            redirectTo="/franchise"
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
