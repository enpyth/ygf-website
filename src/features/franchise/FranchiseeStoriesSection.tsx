'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function FranchiseeStoriesSection() {
    const t = useI18n()

    return (
        <section className="py-20">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t.franchisePage.franchiseeStories.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {t.franchisePage.franchiseeStories.stories.map((story: { name: string, location: string, story: string }, index: number) => (
                        <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                            <CardHeader className="pb-4">
                                <Avatar className="w-24 h-24 mx-auto mb-4">
                                    <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Founder" />
                                    <AvatarFallback className="text-lg">F</AvatarFallback>
                                </Avatar>

                                <div>
                                    <h3 className="text-xl font-semibold text-foreground">{story.name}</h3>
                                    <p className="text-muted-foreground">{story.location}</p>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-sm text-muted-foreground leading-relaxed">
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
