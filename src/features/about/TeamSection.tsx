'use client'

import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function TeamSection() {
    const t = useI18n()

    return (
        <section className="py-20 white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-foreground mb-4">{t.aboutPage.team.title}</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.aboutPage.team.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Team Member 1 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Founder" />
                                <AvatarFallback className="text-lg">F</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Founder</h3>
                                <p className="text-muted-foreground">YGF Australia</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Visionary leader who created the world's first "drinkable soup malatang" and built YGF from a small Harbin food stall into a global brand with nearly 7,000 restaurants worldwide.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 2 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Co-Founder" />
                                <AvatarFallback className="text-lg">CF</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Co-Founder</h3>
                                <p className="text-muted-foreground">YGF Australia</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Strategic partner bringing over 15 years of Australian F&B industry expertise, including key experience in establishing Spicy World Australia.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 3 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src="https://i.pravatar.cc/150?img=13" alt="Marketing Manager" />
                                <AvatarFallback className="text-lg">MM</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Marketing Manager</h3>
                                <p className="text-muted-foreground">YGF Australia</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Marketing expert driving brand awareness and customer engagement across Australia, building the YGF community and expanding our market presence.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
