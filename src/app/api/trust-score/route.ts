import { NextRequest, NextResponse } from 'next/server'
import { calculateTrustScore } from '@/lib/trust-score'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  const score = await calculateTrustScore(organizationId)

  return NextResponse.json({
    organizationId,
    trustScore: score,
    components: {
      freshness: 92,
      authority: 85,
      consistency: 95,
      reviews: 88,
      citations: 76,
    },
  })
}