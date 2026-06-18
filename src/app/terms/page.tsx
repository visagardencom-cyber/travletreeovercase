import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service - Zotomic',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">Zotomic</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-20">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>

        <div className="prose prose-lg">
          <p className="text-gray-600">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">1. Acceptance of Terms</h2>
          <p>By accessing Zotomic, you agree to be bound by these Terms of Service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">2. Service Description</h2>
          <p>Zotomic provides AI-ready entity infrastructure to help your content get recommended by AI systems.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">3. Accounts</h2>
          <p>You must be 18+ to use our service. Keep your account secure.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">4. Pricing</h2>
          <p>Billing is handled through our payment processor. All sales are final.</p>
        </div>
      </div>
    </div>
  )
}