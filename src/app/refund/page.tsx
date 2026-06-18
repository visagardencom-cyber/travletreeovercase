import Link from 'next/link'

export const metadata = {
  title: 'Refund Policy - Zotomic',
}

export default function RefundPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Refund Policy</h1>

        <div className="prose prose-lg">
          <p className="text-gray-600">Last updated: June 2026</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">30-Day Money Back</h2>
          <p>We offer a full 30-day money-back guarantee on all paid plans.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">How to Request</h2>
          <p>Contact support@zotomic.ai within 30 days for a full refund.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">No Questions Asked</h2>
          <p>We believe in our product. If you're not satisfied, we'll refund you.</p>
        </div>
      </div>
    </div>
  )
}