'use client'

import React from 'react'

export interface OverlayTriptychProps {
    messages: string[]
}

export function OverlayTriptych({ messages }: OverlayTriptychProps) {
    const count = Math.max(1, Math.min(messages.length, 6))
    const widths = Array.from({ length: count }, () => `${100 / count}%`)
    const backgroundClasses = [
        'bg-red-900/90',
        'bg-gray-500/30',
        'bg-red-900/90',
        'bg-gray-500/30',
        'bg-gray-500/30',
        'bg-red-900/80',
    ]
    return (
        <div className="absolute inset-0 flex">
            {messages.slice(0, count).map((msg, idx) => (
                <div key={idx} className={`${backgroundClasses[idx % backgroundClasses.length]} flex items-center justify-center p-8`} style={{ width: widths[idx] }}>
                    <p className={`text-white ${idx % 2 === 1 ? 'text-md' : 'text-lg'} font-medium italic px-6 py-4 text-left`}>
                        {msg}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default OverlayTriptych


