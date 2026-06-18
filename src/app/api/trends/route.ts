import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/db'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  const { data: trends, error } = await supabaseAdmin.rpc('get_entity_trends', {
    org_id: organizationId,
  })

  if (error) {
    const { data: priceData } = await supabaseAdmin
      .from('prices')
      .select(`
        *,
        entities:entity_id (title)
      `)
      .eq('organization_id', organizationId)
      .order('captured_at', { ascending: false })
      .limit(100)

    return NextResponse.json({ trends: priceData || [] })
  }

  return NextResponse.json({ trends })
}