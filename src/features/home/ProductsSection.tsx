'use client'

import { useI18n } from '@/lib/contexts/LanguageContent'

export function ProductsSection() {
    const t = useI18n()

    return (
        <section className="py-20 bg-gradient-to-b from-black from-20% to-primary to-100%">
            <div className="w-full px-4 lg:px-8 xl:px-16">
                <div className="w-full mt-5 space-y-12">
                    {/* 产品区块 */}
                    <div className="hover:shadow-lg transition-shadow duration-300 w-full bg-white/80 dark:bg-black/80 backdrop-blur-sm rounded-lg">
                        <div className="flex flex-col lg:flex-row w-full">
                            <div className="lg:w-2/3">
                                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 overflow-hidden">
                                    <img
                                        src="/home/product.png"
                                        alt="Product showcase"
                                        className="w-full  object-cover"
                                    />
                                </div>
                            </div>
                            <div className="lg:w-1/3 p-6 lg:p-8 flex flex-col justify-center">
                                <div className="p-0 pb-4">
                                    <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                                        {t.homePage.products.title}
                                    </h2>
                                </div>
                                <div className="p-0 space-y-4">
                                    <p className="text-muted-foreground leading-relaxed text-base lg:text-lg whitespace-pre-line">
                                        {t.homePage.products.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
