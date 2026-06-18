import Link from 'next/link'

export const metadata = {
  title: 'Dashboard - Zotomic',
}

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-gray-100">
      <nav className="border-b border-[#1F2937] bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-2xl font-bold text-primary">Zotomic</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">demo@zotomic.ai</span>
            <Link href="/admin" className="text-gray-300 hover:text-white">Admin</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
            <div className="text-3xl font-bold text-success mb-2">87/100</div>
            <div className="text-gray-400">AI Trust Score</div>
          </div>

          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
            <div className="text-3xl font-bold text-success mb-2">+18%</div>
            <div className="text-gray-400">AI Recommendation Rate</div>
          </div>

          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">+34</div>
            <div className="text-gray-400">New AI Citations</div>
          </div>

          <div className="bg-[#111827] border border-[#1F2937] rounded-xl p-6">
            <div className="text-lg font-semibold text-white mb-2">Nike Air Zoom</div>
            <div className="text-gray-400">Top Recommended</div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/dashboard/entities" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Entities</h3>
            <p className="text-gray-400">View and manage your entity graph</p>
          </Link>

          <Link href="/dashboard/integrations" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Connections</h3>
            <p className="text-gray-400">Connect your store or API</p>
          </Link>

          <Link href="/dashboard/recommendations" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Recommendations</h3>
            <p className="text-gray-400">See AI recommendation performance</p>
          </Link>

          <Link href="/dashboard/trends" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Trends</h3>
            <p className="text-gray-400">Track price and review trends</p>
          </Link>

          <Link href="/dashboard/visibility" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">AI Visibility</h3>
            <p className="text-gray-400">Monitor AI mentions and citations</p>
          </Link>

          <Link href="/dashboard/trust" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Trust Score</h3>
            <p className="text-gray-400">Improve your AI trust metrics</p>
          </Link>
        </div>
      </div>
    </div>
  )
}