'use client'

import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-2xl font-bold text-primary">Zotomic</span>
          </Link>

          <div className="relative">
            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Profile menu"
              onClick={() => {
                const menu = document.getElementById('profile-menu')
                menu?.classList.toggle('hidden')
              }}
            >
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 118 0M12 14v7"/>
              </svg>
            </button>

            <div id="profile-menu" className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 hidden">
              <Link href="/auth/signup" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign Up</Link>
              <Link href="/auth/signin" className="block px-4 py-2 text-gray-700 hover:bg-gray-50">Sign In</Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <section className="max-w-7xl mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Get Recommended By AI
            <br />
            <span className="text-gray-500">Instead Of Being Ignored</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            Connect your store, blog, or videos. We transform your content into AI-ready data
            that ChatGPT, Claude, Gemini and future agents trust.
          </p>
          <div className="flex gap-4 justify-center mb-16">
            <Link href="/auth/signup" className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-600 transition">
              Start Free
            </Link>
            <button className="px-8 py-3 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
              Watch Demo
            </button>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 mb-24">
            <div className="text-sm text-gray-600 mb-4">Live Counter: 12,451 AI Recommendations Generated Today</div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            The Problem vs The Solution
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="space-y-4">
              <h3 className="font-semibold text-gray-500 text-center">Without Zotomic</h3>
              <div className="flex flex-col items-center space-y-3">
                <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 w-full max-w-xs text-center">Your Website</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 w-full max-w-xs text-center">Messy HTML</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 w-full max-w-xs text-center">AI Confused</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-red-50 border border-red-200 rounded-lg text-red-700 w-full max-w-xs text-center">No Recommendation</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-semibold text-success text-center">With Zotomic</h3>
              <div className="flex flex-col items-center space-y-3">
                <div className="px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-success w-full max-w-xs text-center">Your Website</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-success w-full max-w-xs text-center">Entity Graph</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-success w-full max-w-xs text-center">AI Ready Feed</div>
                <span className="text-gray-400">→</span>
                <div className="px-6 py-3 bg-green-50 border border-green-200 rounded-lg text-success w-full max-w-xs text-center">AI Recommendation</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Integrations</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
              {['Shopify', 'WooCommerce', 'WordPress', 'YouTube', 'Amazon', 'Etsy'].map((name) => (
                <div key={name} className="flex items-center justify-center p-6 bg-white rounded-xl border border-gray-200">
                  <span className="font-semibold text-gray-700">{name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Interactive Demo</h2>

          <div className="max-w-2xl mx-auto">
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Ask AI Anything</label>
              <input
                type="text"
                placeholder="best running shoe under $100"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-8">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-500 mb-3">Current AI Answer</h4>
                <p className="text-gray-600 text-sm">AI guesses randomly...</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h4 className="font-semibold text-success mb-3">Optimized AI Answer</h4>
                <p className="text-success text-sm font-medium">Recommended: Nike Air Zoom</p>
                <p className="text-success text-xs mt-1">Powered by Zotomic</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Three-Step Process</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
                <h3 className="font-semibold text-gray-900 mb-2">Connect</h3>
                <p className="text-gray-600">Connect your store in 60 seconds</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-secondary text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
                <h3 className="font-semibold text-gray-900 mb-2">Structure</h3>
                <p className="text-gray-600">We build your AI Entity Graph</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl">
                <div className="w-12 h-12 bg-accent text-white rounded-lg flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
                <h3 className="font-semibold text-gray-900 mb-2">Recommend</h3>
                <p className="text-gray-600">AI systems understand and recommend your products</p>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-16">AI Trust Score</h2>

          <div className="inline-flex items-center justify-center">
            <div className="relative w-48 h-48">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" stroke="#E5E7EB" strokeWidth="8" fill="none" />
                <circle cx="50" cy="50" r="45" stroke="#10B981" strokeWidth="8" fill="none" strokeDasharray="283" strokeDashoffset="48" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-bold text-success">82</span>
                <span className="text-gray-600">/100</span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-16">What Our Customers Say</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: 'Sarah Chen', role: 'E-commerce Founder', quote: 'Zotomic tripled our AI citations in 3 weeks. The entity graph approach is game-changing.' },
                { name: 'Marcus Rivera', role: 'Marketing Director', quote: 'Finally, a tool that speaks AI language. Our ChatGPT recommendations improved dramatically.' },
                { name: 'Aisha Patel', role: 'Content Manager', quote: 'The Trust Score gives us actionable insights. We optimized our content and saw 40% more visibility.' },
              ].map((t) => (
                <div key={t.name} className="p-8 bg-white rounded-xl">
                  <p className="text-gray-600 mb-4">"{t.quote}"</p>
                  <div className="font-semibold text-gray-900">{t.name}</div>
                  <div className="text-sm text-gray-500">{t.role}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-16">Pricing</h2>

            <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="p-8 bg-white border-2 border-dashed border-gray-300 rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Free</h3>
                <p className="text-4xl font-bold text-gray-400 mb-6">$0<span className="text-base text-gray-600">/month</span></p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="text-gray-600">• 1 Integration</li>
                  <li className="text-gray-600">• 100 Entities</li>
                  <li className="text-gray-600">• Basic AI Feed</li>
                  <li className="text-gray-600">• Monthly Report</li>
                </ul>
                <button className="w-full py-3 border border-gray-300 text-gray-400 rounded-lg cursor-not-allowed">Current Plan</button>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Starter</h3>
                <p className="text-4xl font-bold text-primary mb-6">$49<span className="text-base text-gray-600">/month</span></p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="text-gray-600">• 5 Integrations</li>
                  <li className="text-gray-600">• 5,000 Entities</li>
                  <li className="text-gray-600">• AI Feed</li>
                  <li className="text-gray-600">• MCP Access</li>
                  <li className="text-gray-600">• Weekly Reports</li>
                </ul>
                <button className="w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">Get Started</button>
              </div>

              <div className="p-8 bg-primary text-white rounded-xl transform scale-105">
                <h3 className="text-xl font-semibold mb-4">Growth</h3>
                <p className="text-4xl font-bold mb-6">$199<span className="text-base opacity-80">/month</span></p>
                <ul className="text-left space-y-2 mb-8">
                  <li>• Unlimited Integrations</li>
                  <li>• 50,000 Entities</li>
                  <li>• Competitor Tracking</li>
                  <li>• AI Visibility</li>
                  <li>• Advanced Recommendations</li>
                </ul>
                <button className="w-full py-3 bg-white text-primary rounded-lg font-semibold hover:bg-gray-100 transition">Most Popular</button>
              </div>

              <div className="p-8 bg-white rounded-xl">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Enterprise</h3>
                <p className="text-4xl font-bold text-primary mb-6">Custom</p>
                <ul className="text-left space-y-2 mb-8">
                  <li className="text-gray-600">• Dedicated MCP</li>
                  <li className="text-gray-600">• Private Cloud</li>
                  <li className="text-gray-600">• White Label</li>
                  <li className="text-gray-600">• Custom API</li>
                </ul>
                <button className="w-full py-3 border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition">Contact Sales</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 border-t border-gray-200 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
                <span className="text-xl font-bold text-primary">Zotomic</span>
              </div>
              <p className="text-gray-600">The Infrastructure Behind AI Recommendations.</p>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/dashboard" className="hover:text-primary">Dashboard</Link></li>
                <li><Link href="/integrations" className="hover:text-primary">Integrations</Link></li>
                <li><Link href="/trust-score" className="hover:text-primary">Trust Score</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/about" className="hover:text-primary">About Us</Link></li>
                <li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
                <li><Link href="/faq" className="hover:text-primary">FAQ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-600">
                <li><Link href="/terms" className="hover:text-primary">Terms</Link></li>
                <li><Link href="/privacy" className="hover:text-primary">Privacy</Link></li>
                <li><Link href="/refund" className="hover:text-primary">Refund Policy</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-between items-center pt-8 border-t border-gray-200">
            <p className="text-gray-600">&copy; 2026 Zotomic</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="X (Twitter)">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.171-6.684-5.624 5.684H2.1l6.82-7.618L2.1 2.25h3.308L12.08 9.69l3.164-3.715zm-.9 15.52h2.36L12.08 6.72l-7.1 8.93h2.36l4.92-5.81 4.92 5.81z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.646.069 4.846s-.011 3.58-.069 4.846c-.149 3.225-1.664 4.758-4.919 4.906-1.266.058-1.646.069-4.85.069s-3.58-.012-4.846-.069c-3.24-.148-4.76-1.691-4.908-4.919C2.173 15.74 2.162 15.36 2.162 12s.011-3.58.069-4.846c.149-3.225 1.664-4.758 4.908-4.906 1.266-.058 1.646-.069 4.846-.069zm0-2.163C8.741 0 8.333.004 7.053.052 2.326.127 0 2.448 0 7.017c0 1.366-.014 2.634-.014 3.916s.014 2.55.014 3.916c0 4.574 2.326 6.895 7.053 6.969 1.28.007 1.689.01 4.956.01s3.676-.003 4.956-.01c4.727-.074 7.053-2.395 7.053-6.969 0-1.366.014-2.634.014-3.916s-.014-2.55-.014-3.916c0-4.574-2.326-6.895-7.053-6.969C15.676.013 15.268 0 12 0zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 100-12.324zM12 16a4 4 0 110-8 4 4 0 110 8zm4-11.73a1.329 1.329 0 110 2.658 1.329 1.329 0 110-2.658z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="YouTube">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.027 3.027 0 0 0-2.121-2.12C19.504 3.75 12 3.75 12 3.75s-7.504 0-9.377.316a3.027 3.027 0 0 0-2.121 2.12C.25 8.05 0 12 0 12s.25 3.95.502 5.814a3.027 3.027 0 0 0 2.121 2.12C4.496 20.25 12 20.25 12 20.25s7.504 0 9.377-.316a3.027 3.027 0 0 0 2.121-2.12c.252-1.864.502-5.814.502-5.814s-.25-3.95-.502-5.814zM9.545 15.545V8.455L15.818 12z"/></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.236.195 2.236.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
