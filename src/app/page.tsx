'use client'

import Header from '@/components/layout/public-header'
import Footer from '@/components/layout/Footer'
import PageBanner from '@/components/layout/PageBanner2'
import HomePageBanner from '@/features/home/Banner-shadcn'
import { ImageLeftTextRightWithButton, TextLeftImageRightWithButton } from '@/components/ui/image-text-section'
import { TextImage13 } from '@/features/home/TextImage13'
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
        <HomePageBanner title='' backgroundImage={backgroundImage[0]} />
        {/* <HeroSection /> */}
        {/* <BrandSection /> */}
        {/* <TestimonialsSection /> */}
        <ImageLeftTextRightWithButton
          image={moduleImage[0]}
          title="Our Brand"
          description="With nearly 7,000 stores worldwide, YGF is bringing the authentic taste of hotpot to Australia — fresh, bold, and made for everyone."
          buttonText="LEARN MORE"
          redirectTo="/franchise"
          className=""
        />
        <TextLeftImageRightWithButton
          image={moduleImage[1]}
          title="Our Products"
          description="Where taste meets wellness — fresh ingredients, bold flavours, and endless choices for a healthy, delicious hotpot experience."
          buttonText="LEARN MORE"
          redirectTo="/products"
        />
        <div style={{ position: 'relative' }}>
          <PageBanner
            title={'Our News'}
            backgroundImage={NewsImage[0]}
            redirectTo="/franchise"
          />
        </div>
        <div style={{ position: 'relative' }}>
          <TextImage13
            image={TestimonialsImage[0]}
            title={'What Our Clients Say'}
            descriptions={[
              '"The best Chinese hotpot in Adelaide unless the boss decides to open a second store in city. Authentic flavors that make me coming back at least three times a week. Always five-star experience! Btw, the staff are super kind and adorable." - Hans',
              '"A wonderful place for hot pot. Love the soup bases and the variety of fresh ingredients to use. \nMost definitely coming back." - Margaret',
              '"Delicious food, super clean place, and really fast service. Loved it!" - Xiangzhe',
              '"Very delicious food, the price is also very affordable. Dry mix is a classic taste, bone soup is also very tasty. As a Chinese food well worth trying, I will come again next time. In addition, the staff are friendly and good attitude." - Boya'
            ]}
          />
        </div>
      </main>
      <Footer />
    </>
  )
}
