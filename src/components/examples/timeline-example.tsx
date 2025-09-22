"use client"

import { TimelineWithCards, TimelineCardItem } from "@/components/ui/timeline-with-cards"

// Sample data for the timeline
const timelineItems: TimelineCardItem[] = [
    {
        id: 1,
        date: "Mar 15, 2024",
        title: "Project Kickoff",
        description: "Initial team meeting.",
        image: {
            src: "/images/timeline/kickoff.jpg",
            alt: "Project kickoff meeting"
        },
        text: "We started our journey with an exciting kickoff meeting where we outlined our goals and established the foundation for our project."
    },
    {
        id: 2,
        date: "Mar 22, 2024",
        title: "Design Phase",
        description: "Completed wireframes.",
        image: {
            src: "/images/timeline/design.jpg",
            alt: "Design phase wireframes"
        },
        text: "Our design team created comprehensive wireframes and user experience flows that would guide our development process."
    },
    {
        id: 3,
        date: "Apr 5, 2024",
        title: "Development Sprint",
        description: "Backend development.",
        image: {
            src: "/images/timeline/development.jpg",
            alt: "Development team working"
        },
        text: "The development team began implementing the core features, focusing on performance and scalability from the start."
    },
    {
        id: 4,
        date: "Apr 19, 2024",
        title: "Testing & Deployment",
        description: "Performance optimization.",
        image: {
            src: "/images/timeline/deployment.jpg",
            alt: "Deployment and testing"
        },
        text: "We conducted thorough testing and optimization before deploying to production, ensuring a smooth user experience."
    },
]

export default function TimelineExample() {
    return (
        <div className="container mx-auto py-8">
            <h2 className="text-2xl font-bold mb-8 text-center">Our Journey</h2>

            {/* Default usage with 1:1 ratio */}
            <div className="mb-12">
                <h3 className="text-lg font-semibold mb-4">Default Timeline (1:1 ratio)</h3>
                <TimelineWithCards
                    items={timelineItems}
                    defaultValue={3}
                    orientation="horizontal"
                />
            </div>

            {/* Custom ratio example */}
            <div className="mb-12">
                <h3 className="text-lg font-semibold mb-4">Custom Timeline (2:1 ratio - larger images)</h3>
                <TimelineWithCards
                    items={timelineItems}
                    defaultValue={2}
                    orientation="horizontal"
                    cardImageRatio={2}
                    cardTextRatio={1}
                />
            </div>

            {/* Vertical orientation example */}
            <div className="mb-12">
                <h3 className="text-lg font-semibold mb-4">Vertical Timeline</h3>
                <TimelineWithCards
                    items={timelineItems}
                    defaultValue={1}
                    orientation="vertical"
                    cardImageRatio={1}
                    cardTextRatio={1.5}
                />
            </div>
        </div>
    )
}
