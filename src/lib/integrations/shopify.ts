import { z } from 'zod'
import { supabaseAdmin } from '@/db'
import { normalizeShopifyProduct } from '@/lib/normalize'

const ShopifySchema = z.object({
  shop: z.string(),
  accessToken: z.string(),
})

export async function connectShopify(organizationId: string, shop: string, accessToken: string) {
  const { data: integration, error } = await supabaseAdmin
    .from('integrations')
    .insert({
      organization_id: organizationId,
      type: 'shopify',
      access_token: accessToken,
    })
    .select()
    .single()

  if (error) throw error

  await syncShopifyProducts(organizationId, shop, accessToken)

  return integration
}

export async function syncShopifyProducts(organizationId: string, shop: string, accessToken: string) {
  const response = await fetch(`https://${shop}/admin/api/2024-01/products.json?limit=250`, {
    headers: {
      'X-Shopify-Access-Token': accessToken,
    },
  })

  if (!response.ok) {
    throw new Error('Failed to fetch Shopify products')
  }

  const { products } = await response.json()

  for (const product of products) {
    const normalized = normalizeShopifyProduct(product, organizationId)

    await supabaseAdmin.from('entities').upsert(
      normalized,
      { onConflict: 'slug' }
    )
  }

  return products.length
}

export async function handleShopifyWebhook(request: Request) {
  const topic = request.headers.get('x-shopify-topic')
  const shop = request.headers.get('x-shopify-shop-domain')

  if (!topic || !shop) {
    return new Response('Missing headers', { status: 400 })
  }

  return new Response('OK')
}