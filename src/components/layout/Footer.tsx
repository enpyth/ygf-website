'use client'

import Link from 'next/link';
import Image from 'next/image';
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

function WeChatIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M21.502 19.525c1.524-1.105 2.498-2.738 2.498-4.554 0-3.326-3.237-6.023-7.229-6.023s-7.229 2.697-7.229 6.023c0 3.327 3.237 6.024 7.229 6.024.825 0 1.621-.117 2.36-.33l.212-.032c.139 0 .265.043.384.111l1.583.914.139.045c.133 0 .241-.108.241-.241l-.039-.176-.326-1.215-.025-.154c0-.162.08-.305.202-.392zm-12.827-17.228c-4.791 0-8.675 3.236-8.675 7.229 0 2.178 1.168 4.139 2.997 5.464.147.104.243.276.243.471l-.03.184-.391 1.458-.047.211c0 .16.13.29.289.29l.168-.054 1.899-1.097c.142-.082.293-.133.46-.133l.255.038c.886.255 1.842.397 2.832.397l.476-.012c-.188-.564-.291-1.158-.291-1.771 0-3.641 3.542-6.593 7.911-6.593l.471.012c-.653-3.453-4.24-6.094-8.567-6.094zm5.686 11.711c-.532 0-.963-.432-.963-.964 0-.533.431-.964.963-.964.533 0 .964.431.964.964 0 .532-.431.964-.964.964zm4.82 0c-.533 0-.964-.432-.964-.964 0-.533.431-.964.964-.964.532 0 .963.431.963.964 0 .532-.431.964-.963.964zm-13.398-5.639c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156zm5.783 0c-.639 0-1.156-.518-1.156-1.156 0-.639.517-1.157 1.156-1.157.639 0 1.157.518 1.157 1.157 0 .638-.518 1.156-1.157 1.156z"/>
    </svg>
  )
}

function TikTokIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M16.5 3a5.5 5.5 0 0 0 .1 1.11 5.68 5.68 0 0 0 3.34 3.98c.38.16.77.28 1.16.36V11a8.9 8.9 0 0 1-4.5-1.44v5.72c0 3.27-2.64 5.92-5.9 5.92S4.9 18.55 4.9 15.28c0-3.27 2.64-5.92 5.9-5.92.34 0 .68.03 1 .09v3.05a3.1 3.1 0 0 0-1-.18 2.83 2.83 0 1 0 2.83 2.83V3h2.87Z" />
    </svg>
  )
}

function XiaohongshuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M22.405 9.879c.002.016.01.02.07.019h.725a.797.797 0 0 0 .78-.972a.794.794 0 0 0-.884-.618a.795.795 0 0 0-.692.794c0 .101-.002.666.001.777m-11.509 4.808c-.203.001-1.353.004-1.685.003a2.5 2.5 0 0 1-.766-.126a.025.025 0 0 0-.03.014L7.7 16.127a.025.025 0 0 0 .01.032c.111.06.336.124.495.124c.66.01 1.32.002 1.981 0q.017 0 .023-.015l.712-1.545a.025.025 0 0 0-.024-.036zM.477 9.91c-.071 0-.076.002-.076.01l-.01.08c-.027.397-.038.495-.234 3.06c-.012.24-.034.389-.135.607c-.026.057-.033.042.003.112c.046.092.681 1.523.787 1.74c.008.015.011.02.017.02c.008 0 .033-.026.047-.044q.219-.282.371-.606c.306-.635.44-1.325.486-1.706c.014-.11.021-.22.03-.33l.204-2.616l.022-.293c.003-.029 0-.033-.03-.034zm7.203 3.757a1.4 1.4 0 0 1-.135-.607c-.004-.084-.031-.39-.235-3.06a.4.4 0 0 0-.01-.082c-.004-.011-.052-.008-.076-.008h-1.48c-.03.001-.034.005-.03.034l.021.293q.114 1.473.233 2.946c.05.4.186 1.085.487 1.706c.103.215.223.419.37.606c.015.018.037.051.048.049c.02-.003.742-1.642.804-1.765c.036-.07.03-.055.003-.112m3.861-.913h-.872a.126.126 0 0 1-.116-.178l1.178-2.625a.025.025 0 0 0-.023-.035l-1.318-.003a.148.148 0 0 1-.135-.21l.876-1.954a.025.025 0 0 0-.023-.035h-1.56q-.017 0-.024.015l-.926 2.068c-.085.169-.314.634-.399.938a.5.5 0 0 0-.02.191a.46.46 0 0 0 .23.378a1 1 0 0 0 .46.119h.59c.041 0-.688 1.482-.834 1.972a.5.5 0 0 0-.023.172a.47.47 0 0 0 .23.398c.15.092.342.12.475.12l1.66-.001q.017 0 .023-.015l.575-1.28a.025.025 0 0 0-.024-.035m-6.93-4.937H3.1a.032.032 0 0 0-.034.033c0 1.048-.01 2.795-.01 6.829c0 .288-.269.262-.28.262h-.74c-.04.001-.044.004-.04.047c.001.037.465 1.064.555 1.263c.01.02.03.033.051.033c.157.003.767.009.938-.014c.153-.02.3-.06.438-.132c.3-.156.49-.419.595-.765c.052-.172.075-.353.075-.533q.003-3.495-.007-6.991a.03.03 0 0 0-.032-.032zm11.784 6.896q-.002-.02-.024-.022h-1.465c-.048-.001-.049-.002-.05-.049v-4.66c0-.072-.005-.07.07-.07h.863c.08 0 .075.004.075-.074V8.393c0-.082.006-.076-.08-.076h-3.5c-.064 0-.075-.006-.075.073v1.445c0 .083-.006.077.08.077h.854c.075 0 .07-.004.07.07v4.624c0 .095.008.084-.085.084c-.37 0-1.11-.002-1.304 0c-.048.001-.06.03-.06.03l-.697 1.519s-.014.025-.008.036s.013.008.058.008q2.622.003 5.243.002c.03-.001.034-.006.035-.033zm4.177-3.43q0 .021-.02.024c-.346.006-.692.004-1.037.004q-.021-.003-.022-.024q-.006-.651-.01-1.303c0-.072-.006-.071.07-.07l.733-.003c.041 0 .081.002.12.015c.093.025.16.107.165.204c.006.431.002 1.153.001 1.153m2.67.244a1.95 1.95 0 0 0-.883-.222h-.18c-.04-.001-.04-.003-.042-.04V10.21q.001-.198-.025-.394a1.8 1.8 0 0 0-.153-.53a1.53 1.53 0 0 0-.677-.71a2.2 2.2 0 0 0-1-.258c-.153-.003-.567 0-.72 0c-.07 0-.068.004-.068-.065V7.76c0-.031-.01-.041-.046-.039H17.93s-.016 0-.023.007q-.008.008-.008.023v.546c-.008.036-.057.015-.082.022h-.95c-.022.002-.028.008-.03.032v1.481c0 .09-.004.082.082.082h.913c.082 0 .072.128.072.128v1.148s.003.117-.06.117h-1.482c-.068 0-.06.082-.06.082v1.445s-.01.068.064.068h1.457c.082 0 .076-.006.076.079v3.225c0 .088-.007.081.082.081h1.43c.09 0 .082.007.082-.08v-3.27c0-.029.006-.035.033-.035l2.323-.003a.7.7 0 0 1 .28.061a.46.46 0 0 1 .274.407c.008.395.003.79.003 1.185c0 .259-.107.367-.33.367h-1.218c-.023.002-.029.008-.028.033q.276.655.57 1.303a.05.05 0 0 0 .04.026c.17.005.34.002.51.003c.15-.002.517.004.666-.01a2 2 0 0 0 .408-.075c.59-.18.975-.698.976-1.313v-1.981q.001-.191-.034-.38c0 .078-.029-.641-.724-.998"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-black text-white">

      {/* Footer Content */}
      <div className="relative bg-black py-12 px-4 sm:px-6 lg:px-8">
        {/* 灰白色遮罩层 */}
        {/* <div className="absolute inset-0 bg-white/20"></div> */}

        <div className="container mx-auto relative z-10">
          {/* Top Section: Company Info, Contact, Social Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
            {/* Left Section: Company Name & Description */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h2 className="text-2xl font-bold text-white mb-2">
                YGF Australia
              </h2>
              <p className="text-sm leading-relaxed max-w-xs text-white">
              YGF Australia is the exclusive master franchisee of Yang Guofu in Australia. With over 7,000 stores worldwide, YGF is China’s most renowned and pioneering hotpot brand.
              </p>
            </div>

            {/* Middle Section: Contact Info */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Contact Us
              </h3>
              <div className="space-y-2 text-sm">
                <p className="flex items-center gap-2 text-white/90">
                  <Phone className="h-4 w-4 text-white/80" />
                  <span></span>
                </p>
                <p className="flex items-center gap-2 text-white/90">
                  <Mail className="h-4 w-4 text-white/80" />
                  <span>guofuyang2025@gmail.com</span>
                </p>
                <p className="flex items-center gap-2 text-white/90">
                  <MapPin className="h-4 w-4 text-white/80" />
                  <span>99 gouger street ,Adelaide, 5000. SA</span>
                </p>
              </div>
            </div>

            {/* Right Section: Social Media Links */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <h3 className="text-lg font-semibold text-white mb-3">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <Link href="#" aria-label="Instagram" className="text-white/80 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="TikTok" className="text-white/80 hover:text-white transition-colors">
                  <TikTokIcon className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Facebook" className="text-white/80 hover:text-white transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="Xiaohongshu" className="text-white/80 hover:text-white transition-colors">
                  <XiaohongshuIcon className="h-6 w-6" />
                </Link>
                <Link href="#" aria-label="WeChat" className="text-white/80 hover:text-white transition-colors">
                  <WeChatIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          {/* <Separator className="my-8 bg-white/20" /> */}

          {/* Bottom Bar: Copyright, Links, Language Selector */}
          {/* <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4 text-sm">
          
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <p className="text-white/80">
              © 2025 YGF Australia. All rights reserved.
            </p>
            <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Sitemap
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Terms and Privacy
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Security
              </Link>
              <Link href="#" className="hover:text-white text-white/80 transition-colors">
                Cookie Settings
              </Link>
            </nav>
          </div>

          
          <div className="flex items-center gap-2 text-white/80">
            <Globe className="h-4 w-4" />
            <span>Australia - EN</span>
            
          </div>
        </div> */}
        </div>
      </div>
    </footer>
  );
}
