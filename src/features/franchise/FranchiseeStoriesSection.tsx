'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/contexts/LanguageContent'

interface FranchiseeStoriesSectionProps {
    backgroundImage?: {
        src: string
        alt: string
    }
    overlayColor?: string // e.g. 'black', '#000', 'rgba(0,0,0,1)'
    overlayOpacity?: number // 0 - 1
}

export function FranchiseeStoriesSection({
    backgroundImage,
    overlayColor = 'black',
    overlayOpacity = 0.4
}: FranchiseeStoriesSectionProps = {}) {
    const t = useI18n()

    return (
        <section className="relative py-20">
            {/* 背景图片与遮罩 */}
            {backgroundImage && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={backgroundImage.src}
                        alt={backgroundImage.alt}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div
                        className="absolute inset-0"
                        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
                    />
                </div>
            )}

            <div className="relative container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        {t.franchisePage.franchiseeStories.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {[{
                        name: 'Lulu',
                        location: '',
                        story: '“As a professional chef and former restaurant owner, I’ve always been deeply connected to the food and beverage industry. When I saw YGF Hotpot entering Australia, I immediately recognised the huge potential of this sector. Joining such a well-established and trusted brand gave me the confidence to embark on a new chapter of entrepreneurship. I didn’t hesitate — I reached out right away and became the very first YGF Hotpot franchisee in Brisbane. It’s been an exciting journey and a rewarding opportunity to grow with a brand I truly believe in.”'
                    }, {
                        name: 'Rick',
                        location: '',
                        story: '“Having lived in Australia for over 10 years, I’ve managed different businesses including supermarkets and restaurants. After struggling in my own ventures for more than 5 years, I decided franchising was the right path to improve both my business and myself. That’s when I discovered Yang Guo Fu Hotpot. The team provided full support — from store design and equipment to menu training and marketing — saving me countless detours. Being part of a mature and trusted hotpot brand makes running my business so much easier and gives me peace of mind.”'
                    }].map((story, index) => (
                        <Card key={index} className="text-center duration-300 bg-white/1 border-none">
                            <CardHeader>
                                <Avatar className="w-50 h-50 mx-auto mb-1">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=1" alt="Founder" />
                                    <AvatarFallback className="text-lg">F</AvatarFallback>
                                </Avatar>

                                <div>
                                    <h3 className="text-xl font-semibold text-white text-bold">{story.name}</h3>
                                    <p className="text-white">{story.location}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-white leading-relaxed">
                                    {story.story}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
