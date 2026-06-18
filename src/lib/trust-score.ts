import { supabaseAdmin } from '@/db'
import { normalizeShopifyProduct, normalizeWooProduct, normalizeYouTubeVideo } from './normalize'

interface TrustScoreComponents {
  freshness: number
  authority: number
  consistency: number
  reviewScore: number
  citation: number
}

export async function calculateTrustScore(organizationId: string): Promise<number> {
  const { data: entities } = await supabaseAdmin
    .from('entities')
    .select(`
      *,
      reviews(rating),
      visibility_reports(id)
    `)
    .eq('organization_id', organizationId)

  if (!entities || entities.length === 0) return 0

  const scores = entities.map((entity) => {
    const components: TrustScoreComponents = {
      freshness: calculateFreshness(entity),
      authority: calculateAuthority(entity),
      consistency: calculateConsistency(entity),
      reviewScore: calculateReviewScore(entity.reviews),
      citation: calculateCitationScore(entity.visibility_reports),
    }

    return Math.round(
      (components.freshness + components.authority + components.consistency + components.reviewScore + components.citation) / 5
    )
  })

  return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
}

function calculateFreshness(entity: any): number {
  const daysSinceUpdate = (Date.now() - new Date(entity.updated_at).getTime()) / (1000 * 60 * 60 * 24)
  if (daysSinceUpdate < 7) return 95
  if (daysSinceUpdate < 30) return 80
  if (daysSinceUpdate < 90) return 60
  return 40
}

function calculateAuthority(entity: any): number {
  const entityType = entity.entity_type
  if (entityType === 'brand') return 90
  if (entityType === 'service') return 75
  if (entityType === 'product') return 60
  return 40
}

function calculateConsistency(entity: any): number {
  const fields = [entity.title, entity.description, entity.slug].filter(Boolean).length
  return Math.round((fields / 3) * 100)
}

function calculateReviewScore(reviews: any[]): number {
  if (!reviews || reviews.length === 0) return 50
  const avg = reviews.reduce((sum, r) => sum + (r.rating || 0), 0) / reviews.length
  return Math.round((avg / 5) * 100)
}

function calculateCitationScore(reports: any[]): number {
  if (!reports || reports.length === 0) return 30
  const mentioned = reports.filter(r => r.mentioned).length
  return Math.round((mentioned / reports.length) * 100)
}