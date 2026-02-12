import React from 'react';
import PageBanner from '@/components/layout/PageBanner';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="mb-10">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <h2 className="text-xl font-semibold text-gray-700 mb-6">YGF Malatang Australia</h2>
            <p className="text-lg text-gray-600 mb-8">Effective Date: 10th Feb 2026</p>
            
            <p className="text-gray-700 mb-6">
              YGF Malatang Australia ("YGF Malatang", "we", "our", "us") respects your privacy and is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles (APPs).
            </p>
            
            <p className="text-gray-700 mb-8">
              This Privacy Policy explains how we collect, use, disclose, and protect your personal information when you use our mobile application (the "App") and related services.
            </p>
          </div>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">1. What Personal Information We Collect</h3>
            <p className="text-gray-700 mb-4">We may collect the following types of personal information:</p>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">1.1 Information You Provide to Us</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Full name</li>
                <li>Phone number</li>
                <li>Email address</li>
                <li>Delivery address</li>
                <li>Payment information (processed securely by third-party payment providers)</li>
                <li>Order history</li>
                <li>Feedback or customer support inquiries</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-3">1.2 Information Collected Automatically</h4>
              <p className="text-gray-700 mb-3">When you use our App, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Device information (device type, operating system)</li>
                <li>IP address</li>
                <li>App usage data</li>
                <li>Location data (if you enable location services)</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>
            </div>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">2. How We Use Your Information</h3>
            <p className="text-gray-700 mb-4">We use your personal information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Process and manage food orders</li>
              <li>Deliver products and services</li>
              <li>Process payments</li>
              <li>Communicate with you regarding orders or promotions</li>
              <li>Improve our App and customer experience</li>
              <li>Provide customer support</li>
              <li>Comply with legal obligations</li>
            </ul>
            <p className="text-gray-700 mt-4 font-semibold">We do not sell your personal information.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Location Information</h3>
            <p className="text-gray-700 mb-4">If you enable location services, we may collect your location to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Show nearby store locations</li>
              <li>Provide accurate delivery services</li>
            </ul>
            <p className="text-gray-700 mt-4">You may disable location access in your device settings at any time.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">4. Payment Information</h3>
            <p className="text-gray-700 mb-4">Payments made through our App are processed by secure third-party payment providers (e.g., Apple Pay, Google Pay, Stripe, etc.).</p>
            <p className="text-gray-700">We do not store full credit card details on our servers.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">5. Disclosure of Personal Information</h3>
            <p className="text-gray-700 mb-4">We may disclose your information to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Delivery service providers</li>
              <li>Payment processors</li>
              <li>IT and cloud service providers</li>
              <li>Marketing service providers</li>
              <li>Legal or regulatory authorities where required by law</li>
            </ul>
            <p className="text-gray-700 mt-4">Some service providers may be located outside Australia. Where this occurs, we take reasonable steps to ensure your information is handled securely and in accordance with Australian privacy laws.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">6. Data Storage and Security</h3>
            <p className="text-gray-700 mb-4">We take reasonable steps to protect your personal information from misuse, interference, loss, unauthorised access, modification, or disclosure.</p>
            <p className="text-gray-700 mb-4">These measures include:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Secure servers</li>
              <li>Encrypted data transmission</li>
              <li>Restricted access controls</li>
            </ul>
            <p className="text-gray-700 mt-4">However, no method of transmission over the internet is completely secure.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">7. Access and Correction</h3>
            <p className="text-gray-700 mb-4">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Request access to the personal information we hold about you</li>
              <li>Request correction of inaccurate or outdated information</li>
            </ul>
            <p className="text-gray-700 mt-4">To make a request, please contact us using the details below.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">8. Marketing Communications</h3>
            <p className="text-gray-700 mb-4">We may send you promotional offers and updates if you opt in.</p>
            <p className="text-gray-700">You may unsubscribe at any time via the App or by contacting us.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">9. Retention of Information</h3>
            <p className="text-gray-700 mb-4">We retain personal information only as long as necessary to:</p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Provide services</li>
              <li>Comply with legal obligations</li>
              <li>Resolve disputes</li>
            </ul>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">10. Children's Privacy</h3>
            <p className="text-gray-700">Our App is not directed to children under 16 years of age. We do not knowingly collect personal information from children under 16.</p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">11. Complaints</h3>
            <p className="text-gray-700 mb-4">If you believe we have breached the Australian Privacy Principles, you may contact us.</p>
            <p className="text-gray-700 mb-4">If you are not satisfied with our response, you may contact:</p>
            <p className="text-gray-700 font-semibold mb-2">Office of the Australian Information Commissioner (OAIC)</p>
            <p className="text-gray-700">Website: <a href="https://www.oaic.gov.au" className="text-blue-600 hover:underline">https://www.oaic.gov.au</a></p>
          </section>
          
          <section className="mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">12. Changes to This Privacy Policy</h3>
            <p className="text-gray-700 mb-4">We may update this Privacy Policy from time to time.</p>
            <p className="text-gray-700">The updated version will be published within the App with a revised effective date.</p>
          </section>
          
          <section className="mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">13. Contact Us</h3>
            <p className="text-gray-700 mb-4">If you have any questions about this Privacy Policy or your personal information, please contact:</p>
            <div className="space-y-2 text-gray-700">
              <p><strong>YGF Malatang Australia</strong></p>
              <p>Email: admin@ygfaustralia.com</p>
              <p>Phone: 08 7119 8917</p>
              <p>Address: 99 gouger street ,Adelaide, 5000. SA</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
