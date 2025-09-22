"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ImageTextCardProps {
    image: {
        src: string
        alt: string
    }
    text: string
    className?: string
    imageRatio?: number // Height ratio for image (default: 1)
    textRatio?: number  // Height ratio for text (default: 1)
}

export function ImageTextCard({
    image,
    text,
    className,
    imageRatio = 1,
    textRatio = 1,
}: ImageTextCardProps) {
    return (
        <Card className={cn("w-full max-w-sm mx-auto shadow-lg overflow-hidden py-0", className)}>
            <CardContent className="p-0 m-0 px-0">
                {/* Image Section */}
                <div
                    className="w-full overflow-hidden"
                    style={{
                        aspectRatio: `${imageRatio}:${textRatio}`,
                        minHeight: '200px'
                    }}
                >
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text Section */}
                <div
                    className="p-2"
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center'
                    }}
                >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                        {text}
                    </p>
                </div>
            </CardContent>
        </Card>
    )
}
