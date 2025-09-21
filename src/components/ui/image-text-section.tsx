'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import React from 'react'

interface ImageTextSectionProps {
    image: {
        src: string
        alt: string
    }
    title: string
    description: string
    variant?: 'image-left' | 'image-right'
    className?: string
    // 背景颜色控制
    textBackgroundColor?: string
    // 文字颜色控制
    titleColor?: string
    descriptionColor?: string
}

export function ImageTextSection({
    image,
    title,
    description,
    variant = 'image-left',
    className,
    textBackgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground"
}: ImageTextSectionProps) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85 ",

            className
        )}>
            {/* 图片部分 */}
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* 文字部分 */}
            <div className={cn("w-1/2 flex flex-col justify-center items-center p-8", textBackgroundColor)}>
                <div className="max-w-md text-center">
                    <h2 className={cn("text-3xl font-bold mb-4", titleColor)}>
                        {title}
                    </h2>
                    <p className={cn("text-lg text-left leading-relaxed", descriptionColor)}>
                        {description}
                    </p>
                </div>
            </div>
        </section>
    )
}

// 图片在左侧的变体
export function ImageLeftTextRight({
    image,
    title,
    description,
    className,
    textBackgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground"
}: Omit<ImageTextSectionProps, 'variant'>) {
    return (
        <ImageTextSection
            image={image}
            title={title}
            description={description}
            variant="image-left"
            className={className}
            textBackgroundColor={textBackgroundColor}
            titleColor={titleColor}
            descriptionColor={descriptionColor}
        />
    )
}

// 图片在右侧的变体
export function TextLeftImageRight({
    image,
    title,
    description,
    className,
    textBackgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground"
}: Omit<ImageTextSectionProps, 'variant'>) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85",
            className
        )}>
            {/* 文字部分 */}
            <div className={cn("w-1/2 flex flex-col justify-center items-center p-8", textBackgroundColor)}>
                <div className="max-w-md text-center">
                    <h2 className={cn("text-3xl font-bold mb-4", titleColor)}>
                        {title}
                    </h2>
                    <p className="text-lg text-left text-muted-foreground leading-relaxed mb-6">
                        {description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                </div>
            </div>

            {/* 图片部分 */}
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}

// 带按钮的图片在左侧变体
export function ImageLeftTextRightWithButton({
    image,
    title,
    description,
    buttonText,
    onButtonClick,
    className,
    textBackgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground"
}: Omit<ImageTextSectionProps, 'variant'> & {
    buttonText: string
    onButtonClick?: () => void
}) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85",
            className
        )}>
            {/* 图片部分 */}
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
            </div>

            {/* 文字部分 */}
            <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-background">
                <div className="max-w-md text-center">
                    
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-left text-muted-foreground leading-relaxed mb-6">
                        {description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <button
                        onClick={onButtonClick}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>
        </section>
    )
}

// 带按钮的文字在左侧变体
export function TextLeftImageRightWithButton({
    image,
    title,
    description,
    buttonText,
    onButtonClick,
    className,
    textBackgroundColor = "bg-background",
    titleColor = "text-foreground",
    descriptionColor = "text-muted-foreground"
}: Omit<ImageTextSectionProps, 'variant'> & {
    buttonText: string
    onButtonClick?: () => void
}) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85",
            className
        )}>
            {/* 文字部分 */}
            <div className="w-1/2 flex flex-col justify-center items-center p-8 bg-background">
                <div className="max-w-md text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-left text-muted-foreground leading-relaxed mb-6">
                        {description}
                    </p>
                    <button
                        onClick={onButtonClick}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* 图片部分 */}
            <div className="w-1/2 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    )
}
