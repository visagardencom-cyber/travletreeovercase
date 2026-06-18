import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata = {
  title: 'Sign In - Zotomic',
}

export default function SignInPage() {
  async function handleSignIn(formData: FormData) {
    'use server'
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    console.log('Sign in:', { email })
    redirect('/dashboard')
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <img src="/icon.svg" alt="Zotomic" className="w-8 h-8" />
            <span className="text-xl font-bold text-primary">Zotomic</span>
          </Link>
          <Link href="/auth/signup" className="text-gray-600 hover:text-gray-900">Sign Up</Link>
        </div>
      </nav>

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
            <p className="mt-2 text-gray-600">Sign in to your account</p>
          </div>

          <form action={handleSignIn} className="space-y-6">
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
              Sign In
            </button>

            <Link href="/auth/forgot-password" className="block text-center text-sm text-primary hover:underline">
              Forgot password?
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}