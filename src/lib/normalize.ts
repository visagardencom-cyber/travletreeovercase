import { NormalizedEntity, EntityType } from './types'
import { Entity } from './types'

export function normalizeShopifyProduct(
  product: any,
  organizationId: string
): Omit<Entity, 'id' | 'created_at' | 'updated_at'> {
  return {
    organizationId,
    entityType: 'product' as EntityType,
    title: product.title,
    slug: `shopify-${product.id}`,
    description: product.body_html || null,
  }
}

export function normalizeWooProduct(
  product: any,
  organizationId: string
): Omit<Entity, 'id' | 'created_at' | 'updated_at'> {
  return {
    organizationId,
    entityType: 'product' as EntityType,
    title: product.name,
    slug: `woo-${product.id}`,
    description: product.description || null,
  }
}

export function normalizeYouTubeVideo(
  video: any,
  organizationId: string
): Omit<Entity, 'id' | 'created_at' | 'updated_at'> {
  return {
    organizationId,
    entityType: 'video' as EntityType,
    title: video.snippet?.title,
    slug: `youtube-${video.id}`,
    description: video.snippet?.description || null,
  }
}