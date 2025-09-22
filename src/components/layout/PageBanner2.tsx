'use client'

import Image from 'next/image'
import React from 'react'
import { Button } from '@mui/material'
import Link from 'next/link'

type PageBannerProps = {
  title: string
  subtitle?: string
  redirectTo?: string
  backgroundImage?: {
    src: string
    alt: string
  }
}

export default function PageBanner({ title, subtitle, backgroundImage, redirectTo }: PageBannerProps) {
  return (
    <section className="relative py-45 overflow-hidden">
      {/* Background Image */}
      {backgroundImage && (
        <div className="absolute inset-0 z-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-red-900/60"></div>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white dark:text-black mb-6 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
          {title.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </h1>
        {subtitle ? (
          <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-black max-w-2xl mx-auto mb-8 [text-shadow:_0_4px_8px_rgb(0_0_0_/_0.4)] dark:[text-shadow:_0_4px_8px_rgb(255_255_255_/_0.4)]">
            {subtitle}
          </h2>
        ) : null}
        
        {/* Membership Button */}
        <Link href={redirectTo || '/'}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: '#991b1b',
              color: 'white',
              border: '2px solid white',
              borderRadius: '48px',
              px: 4,
              py: 2,
              fontSize: '16px',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)',
              '&:hover': {
                backgroundColor: '#b91c1c',
                border: '2px solid white',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
              },
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              textTransform: 'none',
            }}
          >
            LEARN MORE
          </Button>
        </Link>
      </div>
    </section>
  )
}


