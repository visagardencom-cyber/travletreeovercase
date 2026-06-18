import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  const { data: entities } = await supabaseAdmin
    .from('entities')
    .select(`*, embeddings, prices, reviews`)
    .eq('organization_id', organizationId)
    .limit(1000)

  const { data: feed } = await supabaseAdmin
    .from('ai_feeds')
    .select('*')
    .eq('organization_id', organizationId)
    .single()

  return NextResponse.json({
    organizationId,
    entities: entities || [],
    feedUrl: feed?.url || null,
    timestamp: new Date().toISOString(),
  })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { organizationId, query } = body

  return NextResponse.json({
    organizationId,
    query,
    results: [],
  })
}