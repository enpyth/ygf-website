'use client'

import Link from 'next/link'

export function CallToActionSection() {
    return (
        <div className="text-center bg-white rounded-2xl shadow-xl p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Ready to Join Our Community?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Be the first to know when our membership program launches.
                Sign up for updates and get exclusive early access!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                    href="/contact"
                    className="px-8 py-3 bg-orange-600 text-white font-semibold rounded-full hover:bg-orange-700 transition-colors text-center"
                >
                    Notify Me When Available
                </Link>
                <Link
                    href="/about"
                    className="px-8 py-3 border-2 border-orange-600 text-orange-600 font-semibold rounded-full hover:bg-orange-600 hover:text-white transition-colors text-center"
                >
                    Learn More About YGF
                </Link>
            </div>
        </div>
    )
}
