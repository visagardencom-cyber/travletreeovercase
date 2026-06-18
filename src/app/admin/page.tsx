import Link from 'next/link'

export const metadata = {
  title: 'Admin Dashboard - Zotomic',
}

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0B1220] text-gray-100">
      <nav className="border-b border-[#1F2937] bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-2xl font-bold text-primary">Zotomic Admin</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-gray-400">admin@zotomic.ai</span>
            <Link href="/dashboard" className="text-gray-300 hover:text-white">User Dashboard</Link>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-white mb-8">Admin Panel</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link href="/admin/users" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Users</h3>
            <p className="text-gray-400">Manage user accounts</p>
          </Link>

          <Link href="/admin/organizations" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Organizations</h3>
            <p className="text-gray-400">View all organizations</p>
          </Link>

          <Link href="/admin/integrations" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Integrations</h3>
            <p className="text-gray-400">Monitor connections</p>
          </Link>

          <Link href="/admin/analytics" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Analytics</h3>
            <p className="text-gray-400">Platform metrics</p>
          </Link>

          <Link href="/admin/billing" className="bg-[#111827] border border-[#1F2937] rounded-xl p-6 hover:border-primary transition">
            <h3 className="text-xl font-semibold text-white mb-2">Billing</h3>
            <p className="text-gray-400">Subscription management</p>
          </Link>
        </div>
      </div>
    </div>
  )
}