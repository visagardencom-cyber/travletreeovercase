import Link from 'next/link'

export const metadata = {
  title: 'Contact Us - Zotomic',
}

export default function ContactPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Contact Us</h1>

        <div className="space-y-6">
          <p className="text-gray-600">Have questions? We'd love to hear from you.</p>

          <div>
            <h3 className="font-semibold text-gray-900">Email</h3>
            <p className="text-primary">support@zotomic.ai</p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900">Sales</h3>
            <p className="text-primary">sales@zotomic.ai</p>
          </div>
        </div>
      </div>
    </div>
  )
}