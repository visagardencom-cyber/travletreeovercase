import Link from 'next/link'

export const metadata = {
  title: 'About Us - Zotomic',
}

export default function AboutPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About Zotomic</h1>

        <div className="prose prose-lg">
          <p className="text-gray-600">Zotomic is the infrastructure behind AI recommendations.</p>

          <p>We help businesses become the source AI systems recommend. Instead of hoping AI guesses your content, we structure it for maximum trust and visibility.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
          <p>To ensure high-quality content gets discovered and recommended by AI systems.</p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8">The Team</h2>
          <p>Built by AI infrastructure experts who understand how recommendation engines work.</p>
        </div>
      </div>
    </div>
  )
}