'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import React from 'react'

interface TitleImageSectionProps {
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
    className?: string
    // 背景颜色控制
    backgroundColor?: string
    titleColor?: string
    descriptionColor?: string
    // 图片样式控制
    imageHeight?: string
    imageObjectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
    // 文字区域样式
    textPadding?: string
    titleSize?: string
    descriptionSize?: string
    // 布局控制
    textAlignment?: 'left' | 'center' | 'right'
    maxWidth?: string
}

export function TitleImageSection({
    title,
    description,
    image,
    className,
    backgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground",
    imageHeight = "h-auto",
    imageObjectFit = "cover",
    textPadding = "p-4 sm:p-6 lg:p-8",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl"
}: TitleImageSectionProps) {
    return (
        <section className={cn(
            "w-full flex flex-col",
            backgroundColor,
            className
        )}>
            {/* 文字部分 */}
            <div className={cn(
                "w-full flex flex-col justify-left  items-left",
                textPadding
            )}>
                <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                    <h3 className={cn(
                        "font-bold mb-3 sm:mb-4 leading-tight",
                        titleSize,
                        titleColor
                    )}>
                        {title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h3>
                    <p className={cn(
                        "leading-relaxed",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                </div>
            </div>

            {/* 图片部分 */}
            <div className="w-full relative">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={cn(
                        "w-full",
                        imageHeight,
                        `object-${imageObjectFit}`
                    )}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
        </section>
    )
}

// 带按钮的变体
export function TitleImageSectionWithButton({
    title,
    description,
    image,
    buttonText,
    onButtonClick,
    className,
    backgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground",
    imageHeight = "h-auto",
    imageObjectFit = "cover",
    textPadding = "p-4 sm:p-6 lg:p-8",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl",
    buttonVariant = "default"
}: TitleImageSectionProps & {
    buttonText: string
    onButtonClick?: () => void
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'outline'
}) {
    const getButtonClasses = () => {
        switch (buttonVariant) {
            case 'primary':
                return "bg-primary text-primary-foreground hover:bg-primary/90"
            case 'secondary':
                return "bg-secondary text-secondary-foreground hover:bg-secondary/90"
            case 'outline':
                return "border border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            default:
                return "bg-primary text-primary-foreground hover:bg-primary/90"
        }
    }

    return (
        <section className={cn(
            "w-full flex flex-col",
            backgroundColor,
            className
        )}>
            {/* 文字部分 */}
            <div className={cn(
                "w-full flex flex-col justify-center items-center",
                textPadding
            )}>
                <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                    <h2 className={cn(
                        "font-bold mb-3 sm:mb-4 leading-tight",
                        titleSize,
                        titleColor
                    )}>
                        {title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className={cn(
                        "leading-relaxed mb-4 sm:mb-6",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                    <button
                        onClick={onButtonClick}
                        className={cn(
                            "px-4 py-2 sm:px-6 sm:py-3 rounded-lg transition-colors font-medium text-sm sm:text-base",
                            getButtonClasses()
                        )}
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* 图片部分 */}
            <div className="w-full relative">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={cn(
                        "w-full",
                        imageHeight,
                        `object-${imageObjectFit}`
                    )}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
        </section>
    )
}

// 带渐变背景的变体
export function TitleImageSectionGradient({
    title,
    description,
    image,
    gradientFrom,
    gradientTo,
    className,
    titleColor = "text-white",
    descriptionColor = "text-white/90",
    imageHeight = "h-auto",
    imageObjectFit = "cover",
    textPadding = "p-4 sm:p-6 lg:p-8",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl"
}: TitleImageSectionProps & {
    gradientFrom: string
    gradientTo: string
}) {
    return (
        <section className={cn(
            "w-full flex flex-col",
            `bg-gradient-to-br from-${gradientFrom} to-${gradientTo}`,
            className
        )}>
            {/* 文字部分 */}
            <div className={cn(
                "w-full flex flex-col justify-center items-center",
                textPadding
            )}>
                <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                    <h2 className={cn(
                        "font-bold mb-3 sm:mb-4 leading-tight",
                        titleSize,
                        titleColor
                    )}>
                        {title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h2>
                    <p className={cn(
                        "leading-relaxed",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                </div>
            </div>

            {/* 图片部分 */}
            <div className="w-full relative">
                <Image
                    src={image.src}
                    alt={image.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={cn(
                        "w-full",
                        imageHeight,
                        `object-${imageObjectFit}`
                    )}
                    style={{
                        width: '100%',
                        height: 'auto',
                    }}
                />
            </div>
        </section>
    )
}
