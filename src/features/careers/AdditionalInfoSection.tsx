'use client'

export function AdditionalInfoSection() {
    return (
        <section className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 lg:px-8 xl:px-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <div>
                        <h2 className="text-3xl font-bold text-foreground mb-6">
                            Join Our Growing Network
                        </h2>
                        <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                            <p>
                                Our franchise network spans across 25 states with over 200 successful
                                locations. Each franchisee brings unique perspectives and local market
                                knowledge that contributes to our collective success and continuous
                                improvement.
                            </p>
                            <p>
                                We're committed to maintaining the highest standards of quality and
                                service across all our locations. Our franchisees are our ambassadors,
                                representing our brand values and commitment to customer satisfaction
                                in their communities.
                            </p>
                            <p>
                                The investment required to join our franchise network includes the
                                initial franchise fee, startup costs, and working capital. We provide
                                detailed financial projections and support to help you secure the
                                necessary funding for your business venture.
                            </p>
                        </div>
                    </div>
                    <div>
                        <img
                            src="/career/training.png"
                            alt="Franchise Network"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
