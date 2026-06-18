export type EntityType = 'product' | 'blog' | 'video' | 'service' | 'brand' | 'category'

export type Plan = 'free' | 'starter' | 'pro' | 'enterprise'

export type IntegrationType = 'shopify' | 'woocommerce' | 'wordpress' | 'youtube' | 'amazon' | 'etsy' | 'custom_api' | 'csv' | 'notion' | 'airtable'

export type VisibilityEngine = 'chatgpt' | 'gemini' | 'claude' | 'perplexity'

export interface User {
  id: string
  name: string | null
  email: string
  planId: string
  createdAt: string
}

export interface Organization {
  id: string
  userId: string
  name: string
  domain: string | null
  createdAt: string
}

export interface Integration {
  id: string
  organizationId: string
  type: IntegrationType
  accessToken: string | null
  refreshToken: string | null
  status: string
  createdAt: string
}

export interface Entity {
  id: string
  organizationId: string
  entityType: EntityType
  title: string
  slug: string | null
  description: string | null
  createdAt: string
  updatedAt: string
}

export interface EntityRelation {
  id: string
  parentEntityId: string
  childEntityId: string
  relationType: string
  createdAt: string
}

export interface Price {
  id: string
  entityId: string
  price: number
  currency: string
  capturedAt: string
}

export interface Review {
  id: string
  entityId: string
  reviewText: string | null
  rating: number | null
  source: string | null
  createdAt: string
}

export interface VisibilityReport {
  id: string
  entityId: string
  engine: VisibilityEngine
  query: string
  position: number | null
  mentioned: boolean
  createdAt: string
}

export interface Recommendation {
  id: string
  entityId: string
  score: number
  reason: string | null
  createdAt: string
}

export interface Embedding {
  id: string
  entityId: string
  vectorId: string
  model: string
  createdAt: string
}

export interface AiFeed {
  id: string
  organizationId: string
  feedType: string
  url: string | null
  lastGenerated: string | null
  createdAt: string
}

export interface NormalizedEntity {
  entityId: string
  entityType: EntityType
  title: string
  price: number | null
  reviews: number
  avgRating: number | null
  videos: string[]
  articles: string[]
  mentions: string[]
}