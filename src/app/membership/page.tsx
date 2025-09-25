import Header from '@/components/layout/public-header';
import Footer from '@/components/layout/Footer';
import PageBanner from '@/components/layout/PageBanner';
import {
    ComingSoonSection,
    FeaturesPreviewSection,
    MembershipImagesSection,
    CallToActionSection
} from '@/features/membership';

export default function Membership() {
    const backgroundImage = [
        {
            src: "/Banner.png",
            alt: "Membership Background Image"
        }
    ];

    return (
        <>
            <Header />
            <main className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
                <PageBanner className="bg-black"
                    title="Membership Program"
                    backgroundImage={backgroundImage[0]}
                />
                <ComingSoonSection />
                <FeaturesPreviewSection />
                <MembershipImagesSection />
                <CallToActionSection />
            </main>
            <Footer />
        </>
    );
}