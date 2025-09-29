'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Users, Target, TrendingUp, Building2, MapPin, Clock } from 'lucide-react'
import { useI18n } from '@/lib/contexts/LanguageContent'

export function CurrentOpeningsSection() {
    const t = useI18n()

    return (
        <section className="py-20 white">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                        {t.careersPage.currentOpenings.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        {t.careersPage.currentOpenings.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-semibold mb-2">
                                        {t.careersPage.currentOpenings.positions.frontOfHouse.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground mb-4">
                                        {t.careersPage.currentOpenings.positions.frontOfHouse.description}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Australia, SA
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.partTimeFullTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.years2Plus}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-semibold mb-2">
                                        {t.careersPage.currentOpenings.positions.kitchenStaff.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground mb-4">
                                        {t.careersPage.currentOpenings.positions.kitchenStaff.description}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Target className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Australia, SA
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.partTimeFullTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.entryLevel}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-semibold mb-2">
                                        Adelaide, SA
                                    </CardTitle>
                                    <p className="text-muted-foreground mb-4">
                                        {t.careersPage.currentOpenings.positions.Waiter.description}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <TrendingUp className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Adelaide, SA
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.fullTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.entryLevel}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                        <CardHeader className="pb-4">
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <CardTitle className="text-xl font-semibold mb-2">
                                        {t.careersPage.currentOpenings.positions.empty.title}
                                    </CardTitle>
                                    <p className="text-muted-foreground mb-4">
                                        {t.careersPage.currentOpenings.positions.empty.description}
                                    </p>
                                </div>
                                <div className="w-12 h-12 bg-primary/20 dark:bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Building2 className="w-6 h-6 text-primary" />
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    Adelaide, SA
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.partTimeFullTime}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Users className="w-4 h-4" />
                                    {t.careersPage.currentOpenings.entryLevel}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}
