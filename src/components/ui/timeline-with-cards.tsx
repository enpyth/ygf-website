"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import {
    Timeline,
    TimelineContent,
    TimelineDate,
    TimelineHeader,
    TimelineIndicator,
    TimelineItem,
    TimelineSeparator,
    TimelineTitle,
} from "@/components/ui/timeline"

// Types
export interface TimelineCardItem {
    id: number
    date: string
    title: string
    description: string
    image: {
        src: string
        alt: string
    }
    text: string
}

interface TimelineWithCardsProps extends React.HTMLAttributes<HTMLDivElement> {
    items: TimelineCardItem[]
    defaultValue?: number
    value?: number
    onValueChange?: (value: number) => void
    orientation?: "horizontal" | "vertical"
    cardImageRatio?: number // Ratio for image height relative to text height (default: 1)
    cardTextRatio?: number // Ratio for text height relative to image height (default: 1)
}

export function TimelineWithCards({
    items,
    defaultValue = 1,
    value,
    onValueChange,
    orientation = "horizontal",
    cardImageRatio = 1,
    cardTextRatio = 1,
    className,
    ...props
}: TimelineWithCardsProps) {
    return (
        <div className={cn("w-full", className)} {...props}>
            <Timeline
                defaultValue={defaultValue}
                value={value}
                onValueChange={onValueChange}
                orientation={orientation}
            >
                {items.map((item) => (
                    <TimelineItem key={item.id} step={item.id}>
                        <TimelineHeader>
                            <TimelineSeparator />
                            <TimelineDate>{item.date}</TimelineDate>
                            <TimelineTitle>{item.title}</TimelineTitle>
                            <TimelineIndicator />
                        </TimelineHeader>
                        <TimelineContent>
                            <Card className="w-full max-w-sm mx-auto shadow-lg">
                                <CardContent className="p-0">
                                    {/* Image Section */}
                                    <div
                                        className="w-full overflow-hidden"
                                        style={{
                                            aspectRatio: `${cardImageRatio}:${cardTextRatio}`,
                                            minHeight: '200px'
                                        }}
                                    >
                                        <img
                                            src={item.image.src}
                                            alt={item.image.alt}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div
                                        className="p-4"
                                        style={{
                                            minHeight: `${200 * cardTextRatio}px`,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {item.text}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </div>
    )
}

// Export the types for external use
export type { TimelineWithCardsProps }
