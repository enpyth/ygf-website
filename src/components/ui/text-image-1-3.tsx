'use client'

import Image from 'next/image'
import { cn } from '@/lib/utils'
import React from 'react'

interface TextImage13Props {
    image: {
        src: string
        alt: string
    }
    title: string
    subtitle: string
    description1: string
    description2: string
    description3: string
    className?: string
}

export function TextImage13({
    image,
    title,
    subtitle,
    description1,
    description2,
    description3,
    className
}: TextImage13Props) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85",
            className
        )}>
            {/* 文字部分 - 占1/4宽度 */}
            <div className="w-1/4 flex flex-col justify-center items-center p-8 bg-background">
                <div className="max-w-md">
                    <h2 className="text-3xl font-bold text-foreground mb-4">

                        {title.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}

                    </h2>
                    <p className="text-lg text-left text-muted-foreground leading-relaxed">
                        {subtitle}
                    </p>
                </div>
            </div>

            {/* 图片部分 - 占3/4宽度 */}
            <div className="w-3/4 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
                {/* 三色遮罩层 */}
                <div className="absolute inset-0 flex">
                    {/* 左侧灰白色遮罩 */}
                    <div className="w-1/3 bg-gray-500/40 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description1}
                        </p>
                    </div>
                    {/* 中间主题色遮罩 */}
                    <div className="w-1/3 bg-primary/60 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description2}
                        </p>
                    </div>
                    {/* 右侧灰白色遮罩 */}
                    <div className="w-1/3 bg-gray-500/40 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

// 带按钮的变体
export function TextImage13WithButton({
    image,
    title,
    description1,
    description2,
    description3,
    buttonText,
    onButtonClick,
    className
}: TextImage13Props & {
    buttonText: string
    onButtonClick?: () => void
}) {
    return (
        <section className={cn(
            "w-full flex overflow-hidden m-0 p-0 h-85",
            className
        )}>
            {/* 文字部分 - 占1/4宽度 */}
            <div className="w-1/4 flex flex-col justify-center items-center p-8 bg-background">
                <div className="max-w-md text-center">
                    <h2 className="text-3xl font-bold text-foreground mb-4">
                        {title}
                    </h2>
                    <p className="text-lg text-left text-muted-foreground leading-relaxed mb-6">
                        {description1}
                    </p>
                    <button
                        onClick={onButtonClick}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                    >
                        {buttonText}
                    </button>
                </div>
            </div>

            {/* 图片部分 - 占3/4宽度 */}
            <div className="w-3/4 relative overflow-hidden">
                <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                />
                {/* 三色遮罩层 */}
                <div className="absolute inset-0 flex">
                    {/* 左侧灰白色遮罩 */}
                    <div className="w-1/3 bg-white/20 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description1}
                        </p>
                    </div>
                    {/* 中间主题色遮罩 */}
                    <div className="w-1/3 bg-primary/60 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description2}
                        </p>
                    </div>
                    {/* 右侧灰白色遮罩 */}
                    <div className="w-1/3 bg-white/20 flex items-center justify-center">
                        <p className="text-white text-lg font-medium px-4 text-center">
                            {description3}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}