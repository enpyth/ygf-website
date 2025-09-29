'use client'

import React from 'react'

export interface TitleBarProps {
    title: string
}

export function TitleBar({ title }: TitleBarProps) {
    return (
        <div className="w-full bg-black text-white py-4 px-6 flex items-center justify-center">
            <h2 className="text-3xl font-bold text-center">
                {title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                        {line}
                        <br />
                    </React.Fragment>
                ))}
            </h2>
        </div>
    )
}

export default TitleBar


