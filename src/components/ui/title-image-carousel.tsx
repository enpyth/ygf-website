'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { TitleImageSection } from './title-image-section'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

interface TitleImageItem {
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
    // 可选的样式覆盖
    backgroundColor?: string
    titleColor?: string
    descriptionColor?: string
    imageHeight?: string
    imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
    textPadding?: string
    titleSize?: string
    descriptionSize?: string
    textAlignment?: 'left' | 'center' | 'right'
    maxWidth?: string
}

interface TitleImageCarouselProps {
    items: TitleImageItem[]
    autoPlay?: boolean
    interval?: number
    showArrows?: boolean
    showIndicators?: boolean
    className?: string
    height?: string | number
}

export default function TitleImageCarousel({
    items,
    autoPlay = true,
    interval = 6000,
    showArrows = true,
    showIndicators = true,
    className,
    height = '850px'
}: TitleImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const timerRef = useRef<NodeJS.Timeout | null>(null)

    const goTo = (index: number) => {
        if (items.length === 0) return
        setCurrentIndex((index + items.length) % items.length)
    }

    const next = () => goTo(currentIndex + 1)
    const prev = () => goTo(currentIndex - 1)

    useEffect(() => {
        if (!autoPlay || items.length <= 1) return
        if (timerRef.current) clearInterval(timerRef.current)
        timerRef.current = setInterval(() => {
            next()
        }, interval)
        return () => {
            if (timerRef.current) clearInterval(timerRef.current)
        }
    }, [autoPlay, interval, currentIndex, items.length])

    if (!items || items.length === 0) return null

    return (
        <div className={cn('relative w-full', className)}>
            {/* Slides */}
            <div className="relative w-full overflow-hidden" style={{ height }}>
                {items.map((item, idx) => (
                    <div
                        key={idx}
                        className={cn(
                            'absolute inset-0 transition-opacity duration-500 ease-in-out',
                            idx === currentIndex ? 'opacity-100' : 'opacity-0'
                        )}
                    >
                        <TitleImageSection
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            backgroundColor={item.backgroundColor}
                            titleColor={item.titleColor}
                            descriptionColor={item.descriptionColor}
                            imageHeight={item.imageHeight}
                            imageObjectFit={item.imageObjectFit}
                            textPadding={item.textPadding}
                            titleSize={item.titleSize}
                            descriptionSize={item.descriptionSize}
                            textAlignment={item.textAlignment}
                            maxWidth={item.maxWidth}
                        />
                    </div>
                ))}
            </div>

            {/* Arrows */}
            {/* {showArrows && items.length > 1 && (
                <>
                    <button
                        aria-label="Previous"
                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
                        onClick={prev}
                    >
                        <ArrowBackIosNewIcon />
                    </button>
                    <button
                        aria-label="Next"
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/90 hover:text-white"
                        onClick={next}
                    >
                        <ArrowForwardIosIcon />
                    </button>
                </>
            )} */}

            {/* Indicators */}
            {showIndicators && items.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            className={cn(
                                'w-2.5 h-2.5 rounded-full',
                                i === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/70'
                            )}
                            onClick={() => goTo(i)}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}


