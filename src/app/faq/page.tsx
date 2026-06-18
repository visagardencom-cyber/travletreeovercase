import Link from 'next/link'

export const metadata = {
  title: 'FAQ - Zotomic',
}

export default function FAQPage() {
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
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>

        <div className="space-y-8">
          {[
            {
              q: 'How does Zotomic improve AI recommendations?',
              a: 'We transform your content into structured entity data that AI systems can understand and trust.',
            },
            {
              q: 'Which AI models do you support?',
              a: 'ChatGPT, Gemini, Claude, and Perplexity. We optimize for all major AI recommendation engines.',
            },
            {
              q: 'How long does setup take?',
              a: 'Connect your store in 60 seconds. Full entity graph builds in minutes.',
            },
            {
              q: 'Can I cancel anytime?',
              a: 'Yes, cancel anytime from your dashboard. No questions asked.',
            },
          ].map((item) => (
            <div key={item.q}>
              <h3 className="text-xl font-semibold text-gray-900">{item.q}</h3>
              <p className="text-gray-600 mt-2">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}