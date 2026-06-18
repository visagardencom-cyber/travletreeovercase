import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy - Zotomic',
}

export default function PrivacyPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>

        <div className="prose prose-lg">
          <p className="text-gray-600">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Data We Collect</h2>
          <p>We collect only necessary information to provide our service.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">How We Use Data</h2>
          <p>Data is used solely for providing and improving our AI recommendation infrastructure.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Your Rights</h2>
          <p>You can export or delete your data at any time from your dashboard.</p>
        </div>
      </div>
    </div>
  )
}