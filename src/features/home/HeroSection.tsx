'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Carousel, CarouselRef } from '@/components/ui/carousel'
import { useI18n } from '@/lib/contexts/LanguageContent'
import { useState, useRef } from 'react'
import Link from 'next/link'

export function HeroSection() {
    const t = useI18n()
    const [currentSlide, setCurrentSlide] = useState(0)
    const carouselRef = useRef<CarouselRef>(null)

    // 轮播图图片数据
    const carouselImages = [
        {
            src: "/home/lunbo1.png",
            alt: "轮播图1 - 美食展示"
        },
        {
            src: "/home/lunbo2.png",
            alt: "轮播图2 - 美食展示"
        },
        {
            src: "/home/lunbo3.png",
            alt: "轮播图3 - 美食展示"
        }
    ]

    // 处理指示器点击
    const handleIndicatorClick = (index: number) => {
        setCurrentSlide(index)
        // 通知轮播图组件切换到指定索引
        if (carouselRef.current) {
            carouselRef.current.goToSlide(index)
        }
    }

    return (
        <section className="relative h-screen w-full">
            {/* 轮播图背景 */}
            <div className="absolute inset-0 w-full h-full">
                <Carousel
                    ref={carouselRef}
                    images={carouselImages}
                    autoPlay={true}
                    interval={4000}
                    showArrows={false}
                    showIndicators={false}
                    className="w-full h-full"
                    onSlideChange={setCurrentSlide}
                />
                {/* 主题色遮罩层 - 只影响图片 */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/30 from-60% to-black to-100%"></div>
            </div>

            {/* 内容覆盖层 - 高z-index，不受遮罩影响 */}
            <div className="relative z-30 flex items-center justify-center h-full w-full">
                <div className="text-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(var(--primary)_/_0.4)]">
                        {t.homePage.hero.title}
                    </h1>
                    <p className="text-xl md:text-3xl text-white dark:text-black mb-4 max-w-4xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                        {t.homePage.hero.subtitle}
                    </p>
                    <p className="text-lg md:text-xl text-white dark:text-black mb-8 max-w-3xl mx-auto [text-shadow:_0_2px_4px_rgb(var(--primary)_/_0.3)]">
                        {t.homePage.hero.extraText}
                    </p>
                </div>
            </div>
        </section>
    )
}
