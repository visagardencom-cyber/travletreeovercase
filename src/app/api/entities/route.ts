import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/db'
import { z } from 'zod'

const EntitySchema = z.object({
  entityType: z.enum(['product', 'blog', 'video', 'service', 'brand', 'category']),
  title: z.string(),
  slug: z.string().optional(),
  description: z.string().optional(),
})

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const organizationId = searchParams.get('organizationId')

  if (!organizationId) {
    return NextResponse.json({ error: 'organizationId required' }, { status: 400 })
  }

  const { data, error } = await supabaseAdmin
    .from('entities')
    .select(`*, reviews(count), prices(price, captured_at)`)
    .eq('organization_id', organizationId)
    .order('created_at', { ascending: false })

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ entities: data })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const validated = EntitySchema.parse(body)

  const { data, error } = await supabaseAdmin
    .from('entities')
    .insert(validated)
    .select()
    .single()

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }

  return NextResponse.json({ entity: data }, { status: 201 })
}