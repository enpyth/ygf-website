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
                    {t.franchisePage.franchiseeStories.stories.map((story: { name: string, location: string, story: string }, index: number) => (
                        <Card key={index} className="text-center duration-300 bg-white/1 border-none">
                            <CardHeader>
                                <Avatar className="w-50 h-50 mx-auto mb-1">
                                    <AvatarImage src="/tmp/avatar_tmp.jpg" alt="Founder" />
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
