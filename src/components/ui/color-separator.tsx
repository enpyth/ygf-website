'use client'

import { cn } from '@/lib/utils'
import React from 'react'

interface ColorSeparatorProps {
    title?: string
    subtitle?: string
    description?: string
    className?: string
    // 背景和文字颜色控制
    backgroundColor?: string
    titleColor?: string
    subtitleColor?: string
    descriptionColor?: string
    // 文字大小控制
    titleSize?: string
    subtitleSize?: string
    descriptionSize?: string
    // 布局控制
    textAlignment?: 'left' | 'center' | 'right'
    maxWidth?: string
    // 内边距控制
    padding?: string
    // 高度控制
    minHeight?: string
    // 是否显示边框
    showBorder?: boolean
    borderColor?: string
    borderWidth?: string
}

export function ColorSeparator({
    title,
    subtitle,
    description,
    className,
    backgroundColor = "bg-gray-100",
    titleColor = "text-gray-900",
    subtitleColor = "text-gray-700",
    descriptionColor = "text-gray-600",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    subtitleSize = "text-lg sm:text-xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl",
    padding = "py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8",
    minHeight = "min-h-[120px] sm:min-h-[150px]",
    showBorder = false,
    borderColor = "border-gray-200",
    borderWidth = "border-t border-b"
}: ColorSeparatorProps) {
    return (
        <section className={cn(
            "w-full flex flex-col justify-center items-center",
            backgroundColor,
            padding,
            minHeight,
            showBorder && borderWidth,
            showBorder && borderColor,
            className
        )}>
            <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                {title && (
                    <h2 className={cn(
                        "font-bold mb-2 sm:mb-3 leading-tight",
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
                )}

                {subtitle && (
                    <h3 className={cn(
                        "font-semibold mb-2 sm:mb-3 leading-tight",
                        subtitleSize,
                        subtitleColor
                    )}>
                        {subtitle.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h3>
                )}

                {description && (
                    <p className={cn(
                        "leading-relaxed",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}

// 带按钮的变体
export function ColorSeparatorWithButton({
    title,
    subtitle,
    description,
    buttonText,
    onButtonClick,
    className,
    backgroundColor = "bg-gray-100",
    titleColor = "text-gray-900",
    subtitleColor = "text-gray-700",
    descriptionColor = "text-gray-600",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    subtitleSize = "text-lg sm:text-xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl",
    padding = "py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8",
    minHeight = "min-h-[120px] sm:min-h-[150px]",
    showBorder = false,
    borderColor = "border-gray-200",
    borderWidth = "border-t border-b",
    buttonVariant = "default",
    buttonSize = "default"
}: ColorSeparatorProps & {
    buttonText: string
    onButtonClick?: () => void
    buttonVariant?: 'default' | 'primary' | 'secondary' | 'outline' | 'ghost'
    buttonSize?: 'sm' | 'default' | 'lg'
}) {
    const getButtonClasses = () => {
        const baseClasses = "rounded-lg transition-colors font-medium"
        const sizeClasses = {
            sm: "px-4 py-2 text-sm",
            default: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg"
        }

        const variantClasses = {
            default: "bg-gray-900 text-white hover:bg-gray-800",
            primary: "bg-primary text-primary-foreground hover:bg-primary/90",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90",
            outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
            ghost: "text-gray-700 hover:bg-gray-100"
        }

        return cn(
            baseClasses,
            sizeClasses[buttonSize],
            variantClasses[buttonVariant]
        )
    }

    return (
        <section className={cn(
            "w-full flex flex-col justify-center items-center",
            backgroundColor,
            padding,
            minHeight,
            showBorder && borderWidth,
            showBorder && borderColor,
            className
        )}>
            <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                {title && (
                    <h2 className={cn(
                        "font-bold mb-2 sm:mb-3 leading-tight",
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
                )}

                {subtitle && (
                    <h3 className={cn(
                        "font-semibold mb-2 sm:mb-3 leading-tight",
                        subtitleSize,
                        subtitleColor
                    )}>
                        {subtitle.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h3>
                )}

                {description && (
                    <p className={cn(
                        "leading-relaxed mb-4 sm:mb-6",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                )}

                <button
                    onClick={onButtonClick}
                    className={getButtonClasses()}
                >
                    {buttonText}
                </button>
            </div>
        </section>
    )
}

// 渐变背景变体
export function ColorSeparatorGradient({
    title,
    subtitle,
    description,
    gradientFrom,
    gradientTo,
    gradientDirection = "to-r",
    className,
    titleColor = "text-white",
    subtitleColor = "text-white/90",
    descriptionColor = "text-white/80",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    subtitleSize = "text-lg sm:text-xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl",
    padding = "py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8",
    minHeight = "min-h-[120px] sm:min-h-[150px]",
    showBorder = false,
    borderColor = "border-white/20",
    borderWidth = "border-t border-b"
}: ColorSeparatorProps & {
    gradientFrom: string
    gradientTo: string
    gradientDirection?: 'to-r' | 'to-l' | 'to-t' | 'to-b' | 'to-tr' | 'to-tl' | 'to-br' | 'to-bl'
}) {
    return (
        <section className={cn(
            "w-full flex flex-col justify-center items-center",
            `bg-gradient-${gradientDirection} from-${gradientFrom} to-${gradientTo}`,
            padding,
            minHeight,
            showBorder && borderWidth,
            showBorder && borderColor,
            className
        )}>
            <div className={cn("w-full", maxWidth, `text-${textAlignment}`)}>
                {title && (
                    <h2 className={cn(
                        "font-bold mb-2 sm:mb-3 leading-tight",
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
                )}

                {subtitle && (
                    <h3 className={cn(
                        "font-semibold mb-2 sm:mb-3 leading-tight",
                        subtitleSize,
                        subtitleColor
                    )}>
                        {subtitle.split('\n').map((line, i) => (
                            <React.Fragment key={i}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </h3>
                )}

                {description && (
                    <p className={cn(
                        "leading-relaxed",
                        descriptionSize,
                        descriptionColor
                    )}>
                        {description}
                    </p>
                )}
            </div>
        </section>
    )
}

// 带图标的分隔符
export function ColorSeparatorWithIcon({
    title,
    subtitle,
    description,
    icon,
    iconPosition = "top",
    className,
    backgroundColor = "bg-gray-100",
    titleColor = "text-gray-900",
    subtitleColor = "text-gray-700",
    descriptionColor = "text-gray-600",
    iconColor = "text-gray-600",
    titleSize = "text-2xl sm:text-3xl lg:text-4xl",
    subtitleSize = "text-lg sm:text-xl",
    descriptionSize = "text-base sm:text-lg",
    textAlignment = "center",
    maxWidth = "max-w-4xl",
    padding = "py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8",
    minHeight = "min-h-[120px] sm:min-h-[150px]",
    showBorder = false,
    borderColor = "border-gray-200",
    borderWidth = "border-t border-b"
}: ColorSeparatorProps & {
    icon: React.ReactNode
    iconPosition?: 'top' | 'bottom' | 'left' | 'right'
    iconColor?: string
}) {
    return (
        <section className={cn(
            "w-full flex flex-col justify-center items-center",
            backgroundColor,
            padding,
            minHeight,
            showBorder && borderWidth,
            showBorder && borderColor,
            className
        )}>
            <div className={cn(
                "w-full flex items-center",
                iconPosition === 'left' && "flex-row",
                iconPosition === 'right' && "flex-row-reverse",
                iconPosition === 'top' && "flex-col",
                iconPosition === 'bottom' && "flex-col-reverse"
            )}>
                <div className={cn(
                    "flex-shrink-0 mb-4",
                    iconPosition === 'left' && "mr-4 mb-0",
                    iconPosition === 'right' && "ml-4 mb-0"
                )}>
                    <div className={cn("text-4xl", iconColor)}>
                        {icon}
                    </div>
                </div>

                <div className={cn("flex-1", maxWidth, `text-${textAlignment}`)}>
                    {title && (
                        <h2 className={cn(
                            "font-bold mb-2 sm:mb-3 leading-tight",
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
                    )}

                    {subtitle && (
                        <h3 className={cn(
                            "font-semibold mb-2 sm:mb-3 leading-tight",
                            subtitleSize,
                            subtitleColor
                        )}>
                            {subtitle.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    <br />
                                </React.Fragment>
                            ))}
                        </h3>
                    )}

                    {description && (
                        <p className={cn(
                            "leading-relaxed",
                            descriptionSize,
                            descriptionColor
                        )}>
                            {description}
                        </p>
                    )}
                </div>
            </div>
        </section>
    )
}
