import { NextRequest, NextResponse } from 'next/server'
import { generateRecommendation, simulateAIModel } from '@/lib/recommendation'
import { z } from 'zod'
import { supabaseAdmin } from '@/db'

const SimulateSchema = z.object({
  query: z.string(),
  engine: z.enum(['chatgpt', 'gemini', 'claude']),
  organizationId: z.string().optional(),
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('recommendations')
    .select('*, entities:entity_id (title, entity_type)')
    .eq('organization_id', organizationId)
    .order('score', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ recommendations: data })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { query, engine, organizationId } = SimulateSchema.parse(body)

  if (organizationId) {
    const recommendations = await generateRecommendation(query, organizationId)
    return NextResponse.json({ recommendations })
  }

  const simulation = await simulateAIModel(query, engine)
  return NextResponse.json({ simulation })
}