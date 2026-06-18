import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const VisibilitySchema = z.object({
  entityId: z.string(),
  engine: z.enum(['chatgpt', 'gemini', 'claude', 'perplexity']),
  query: z.string(),
})

export async function POST(request: NextRequest) {
  const body = await request.json()
  const { entityId, engine, query } = VisibilitySchema.parse(body)

  return NextResponse.json({ tracked: true })
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  return NextResponse.json({ visibility: [] })
}