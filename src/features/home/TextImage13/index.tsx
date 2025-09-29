'use client'

import Image from 'next/image'
import React from 'react'
import { cn } from '@/lib/utils'
import TitleBar from './TitleBar'
import OverlayTriptych from './OverlayTriptych'

export interface TextImage13FeatureProps {
    image: { src: string; alt: string }
    title: string
    descriptions: string[]
    className?: string
}

export function TextImage13({ image, title, descriptions, className }: TextImage13FeatureProps) {
    return (
        <section className={cn("w-full flex flex-col overflow-hidden m-0 p-0 h-100", className)}>
            <TitleBar title={title} />
            <div className="w-full flex flex-1">
                <div className="w-full relative overflow-hidden">
                    <Image src={image.src} alt={image.alt} fill className="object-cover" />
                    <OverlayTriptych messages={descriptions || []} />
                </div>
            </div>
        </section>
    )
}

export default TextImage13
