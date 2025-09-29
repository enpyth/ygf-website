'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import { cn } from '@/lib/utils'

interface FAQQuestion {
    question: string
    answer: string
}

interface FAQSectionProps {
    title: string
    questions: FAQQuestion[]
    className?: string
}

export function FAQSection({ title, questions, className }: FAQSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false)

    const toggleExpanded = () => {
        setIsExpanded(!isExpanded)
    }

    return (
        <Card
            className={cn(
                "cursor-pointer transition-all duration-300 bg-transparent border-0 border-t border-white text-white rounded-none",
                className
            )}
            onClick={toggleExpanded}
        >
            <CardHeader>
                <CardTitle className="flex items-center justify-between text-lg font-semibold">
                    <span>{title}</span>
                    <div className="flex items-center">
                        {isExpanded ? (
                            <ArrowDropUpIcon className="text-white" fontSize="medium" />
                        ) : (
                            <ArrowDropDownIcon className="text-white" fontSize="medium" />
                        )}
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
                <div
                    className={cn(
                        "overflow-hidden transition-all duration-300 ease-in-out text-white",
                        isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
                    )}
                >
                    <div className="space-y-6">
                        {questions.map((faq, index) => (
                            <div key={index} className="text-white border-b border-transparent pb-4 last:border-b-0 last:pb-0">
                                <h4 className="font-semibold text-white mb-2">{faq.question}</h4>
                                <p className="text-white leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
