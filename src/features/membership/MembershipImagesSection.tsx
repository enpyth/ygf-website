'use client'

import Image from 'next/image'

export function MembershipImagesSection() {
    return (
        <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="/membership/membership1.png"
                        alt="Membership Benefits Preview"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-semibold text-lg">Exclusive Rewards</h4>
                        <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="/membership/membership2.png"
                        alt="Membership Program Preview"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-semibold text-lg">Special Privileges</h4>
                        <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                </div>
            </div>

            <div className="relative group">
                <div className="aspect-square overflow-hidden rounded-xl shadow-lg">
                    <Image
                        src="/membership/membership3.png"
                        alt="Membership Experience Preview"
                        width={400}
                        height={400}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                        <h4 className="font-semibold text-lg">Premium Experience</h4>
                        <p className="text-sm opacity-90">Coming Soon</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
