import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Sign Up - Zotomic',
}

export default function SignUpPage() {
  async function handleSignUp(formData: FormData) {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string
    const name = formData.get('name') as string

    console.log('Sign up:', { email, name })
    redirect('/auth/signin')
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">Zotomic</span>
          </Link>
          <Link href="/auth/signin" className="text-gray-600 hover:text-gray-900">Sign In</Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Create Your Account</h1>
            <p className="mt-2 text-gray-600">Start your free trial. No credit card required.</p>
          </div>

          <form action={handleSignUp} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:ring-2 focus:ring-primary"
                placeholder="••••••••"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary px-4 py-3 text-white font-semibold hover:bg-blue-600 transition"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-gray-600">
              By signing up, you agree to our{' '}
              <Link href="/terms" className="text-primary hover:underline">Terms of Service</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  )
}