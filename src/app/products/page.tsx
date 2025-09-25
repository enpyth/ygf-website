
import { Separator } from '@/components/ui/separator';
import PublicHeader from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import { getItemsWithParsedData } from '@/db/items';
import PageBanner from '@/components/layout/PageBanner'
import { LanguageProvider } from '@/lib/contexts/LanguageContext';
import { TitleImageSection } from '@/components/ui/title-image-section';
import TitleImageCarousel from '@/components/ui/title-image-carousel';
import { ColorSeparator } from '@/components/ui/color-separator';
import {
    HeroSection,
    SignatureSoupBases,
    SpecialCombos,
    ProductGrid,
    ProductGridSkeleton,
    IngredientsSupplyChain
} from './components';
import { TextLeftImageRight, ImageLeftTextRight } from '@/components/ui/image-text-section';

// 服务器端组件：获取数据
async function ProductGridServer() {
    try {
        const items = await getItemsWithParsedData();
        return <ProductGrid items={items} />;
    } catch (error) {
        console.error('Error fetching products:', error);
        return (
            <section className="py-8">
                <div className="text-center">
                    <p className="text-muted-foreground">Unable to load products at this time</p>
                </div>
            </section>
        );
    }
}

const backgroundImage = [
    {
        src: "/Banner.png",
        alt: "Background Image"
    },
]
const ProductsSection1 = [
    {
        src: "/products/section1.png",
        alt: "Our Specialities Image"
    },
]
const ProductsSection2 = [
    {
        src: "/products/section2.png",
        alt: "Our Specialities Image"
    },
]
const ProductsSection3 = [
    {
        src: "/products/section3.png",
        alt: "Our Specialities Image"
    },
]
const ProductsSection4 = [
    {
        src: "/products/section4.png",
        alt: "Our Specialities Image"
    },
]

const soupBases1 = [
    {
        src: "/products/soup1.png",
        alt: "Soup Bases Image"
    },
]
const soupBases2 = [
    {
        src: "/products/soup2.png",
        alt: "Soup Bases Image"
    },
]
const soupBases3 = [
    {
        src: "/products/soup3.png",
        alt: "Soup Bases Image"
    },
]

export default function ProductsPage() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-black">
                {/* 添加Header */}
                <PublicHeader />

                {/* Hero Section */}
                <PageBanner
                    title='Where Taste Meets Wellness'
                    backgroundImage={backgroundImage[0]} />
                {/* <ColorSeparator
                    title="Where Taste Meets Wellness"
                    
                    backgroundColor="bg-[#9B3A31]"
                    titleColor="text-white"
                    descriptionColor="text-white"
                    minHeight="max-h-[10px]"
                /> */}
                <TextLeftImageRight
                    title="Our Specialities-Elevate Chinese Classics"
                    description="Expertly curated dishes infused with the hearty flavours of China, created with an emphasis on wholesome, nourishing ingredients for a well-rounded dining experience. "
                    image={ProductsSection1[0]}
                    textBackgroundColor="bg-[#9B3A31]"
                    titleColor="text-white"
                    descriptionColor="text-white"
                />
                <ImageLeftTextRight
                    title="Health-Focused Ingredients"
                    description="Discover a world of vibrant and flavourful dining where your health and taste buds are equally prioritized. We're committed to using only the freshest, healthiest ingredients in our dishes, featuring a variety of proteins such as shrimp, chicken, and beef, alongside an array of fresh vegetables. Our nutritious offerings ensure a guilt-free and enjoyable dining experience."
                    image={ProductsSection2[0]}
                    textBackgroundColor="bg-[#9B3A31]"
                    titleColor="text-white"
                    descriptionColor="text-white"
                />
                <TextLeftImageRight
                    title="Super Fast Preparation and Enjoyment"
                    description="Savor the wonders of hotpot in no time with our expedited cooking process. Our talented chefs are well-versed in preparing this fresh and flavourful dish quickly, ensuring that your customised order is served promptly and at the peak of deliciousness. Relish in the warmth and richness of hotpot without the wait."
                    image={ProductsSection3[0]}
                />
                <ImageLeftTextRight
                    title="Fully Customised Ordering"
                    description="Experience the ultimate personalised dining adventure with our fully customisable ordering system. Choose from an endless combination of delectable ingredients and let our experienced chefs craft the perfect hotpot creation tailored to your preferences, complete with a unique soup base designed to elevate your taste experience."
                    image={ProductsSection4[0]}
                />
                {/* 招牌汤底 */}
                <ColorSeparator
                    title="Top Soup Bases We Offer"
                    description='Explore our crowd-pleasing favorites, each embodying the essence of our healthy, delicious, and fresh philosophy. Customise your own hotpot experience with our wide variety of offerings.'
                    backgroundColor="bg-black"
                    titleColor="text-white"
                    descriptionColor="text-white"
                    minHeight="max-h-[200px]"
                />
                <TitleImageCarousel
                    className="bg-black"
                    items={[
                        {
                            title: "Classic Herbal Beef Bone Broth",
                            description: "Treat yourself to the time-tested, soul-warming goodness of our Bone Broth, prepared meticulously by simmering the highest-quality bones sourced from responsible farms. Our master chefs dedicate hours to extracting every ounce of nutrients and flavours from the bones, nurturing a harmonious balance of depth and silkiness in our broth. Flawlessly seasoned with fragrant herbs and select spices, each spoonful unveils a comforting symphony of flavours that leaves you enchanted. Bone Broth is heralded for its multitude of health benefits, including joint support, gut health, and immunity boosting properties. Revel in the subtle complexity and wholesome benefits of our lovingly crafted Bone Broth.",
                            image: soupBases1[0],
                            backgroundColor: 'bg-black',
                            titleColor: 'text-white',
                            descriptionColor: 'text-white',
                            textAlignment: 'left',
                            titleSize: 'text-2xl'
                        },
                        {
                            title: "Sweet & Sour Tomato Soup",
                            description: "Indulge in the rich, vibrant flavours of our Tomato Broth, a delightful culinary surprise blending the tanginess of ripe tomatoes with the savory notes of traditional Chinese herbs and spices. This soup base incorporates a generous amount of farm-fresh tomatoes, simmered slowly to allow the natural sweetness to bloom, followed by a gentle fusion with our skillfully crafted spice blend. As the flavours unite, the resulting broth presents a soothing, well-rounded taste experience, ideal for those seeking comfort in a bowl. Tomato Broth promotes excellent digestive balance and provides an abundance of antioxidants and vitamins, making it a genuinely nourishing indulgence that you can feel good about.",
                            image: soupBases2[0],
                            backgroundColor: 'bg-black',
                            titleColor: 'text-white',
                            descriptionColor: 'text-white',
                            textAlignment: 'left',
                            titleSize: 'text-2xl'
                        },
                        {
                            title: "Grind Pleasant Spicy Mix (Dry)",
                            description: "Embark on a captivating culinary journey with our Spicy Mix, an expertly crafted dry hotpot that combines bold spices for an unforgettable meal. Sichuan peppercorns and chili peppers harmonise with delicate undertones of fragrant herbs and umami-rich seasonings, elevating your personalised hotpot dish. Discover the innovative and vibrant flavours of Chinese cuisine while challenging your palate in this fiery and fascinating modern hotpot experience.",
                            image: soupBases3[0],
                            backgroundColor: 'bg-black',
                            titleColor: 'text-white',
                            descriptionColor: 'text-white',
                            textAlignment: 'left',
                            titleSize: 'text-2xl'
                        }
                    ]}
                />
                {/* 页脚 */}
                <ColorSeparator
                    backgroundColor="bg-[#A1221F]"
                    minHeight="min-h-[325px]"
                />
                <Footer />
            </div>
        </LanguageProvider>
    );
}