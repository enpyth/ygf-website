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

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {/* Team Member 1 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src="https://i.pravatar.cc/150?img=11" alt="Founder" />
                                <AvatarFallback className="text-lg">F</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Founders & Visionary Leaders</h3>
                                <p className="text-muted-foreground">YGF Australia</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                The YGF Australia leadership team brings over 15 years of experience in the Australian food and beverage industry, with a strong track record including Spicy World Australia. Successfully launched Sydney and Melbourne stores with pioneering concepts such as robot-assisted service, creative butter bear hotpot bases, and premium dining experiences.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Team Member 2 */}
                    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-2">
                            <Avatar className="w-24 h-24 mx-auto mb-4">
                                <AvatarImage src="https://i.pravatar.cc/150?img=12" alt="Co-Founder" />
                                <AvatarFallback className="text-lg">CF</AvatarFallback>
                            </Avatar>
                            <div>
                                <h3 className="text-xl font-semibold text-foreground">Operation Managers(Front House/Kitchen)</h3>
                                <p className="text-muted-foreground">YGF Australia</p>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                Our Operation Managers have more than a decade of hands-on experience in the hospitality sector, with a deep focus on the modern hotpot industry. Their professional background in restaurant and hotel management provides extensive expertise in optimizing dining experiences, kitchen workflow, and staff training, ensuring consistent quality and efficiency across all outlets.
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
                                Our Marketing Lead has previously worked with international companies such as TikTok and Nestlé, bringing rich branding knowledge, strong social media resources, and proven experience in customer engagement. This expertise enables YGF Australia to build a powerful digital presence and connect with both local and international audiences.
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
