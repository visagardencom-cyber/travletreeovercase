import { qdrant } from '@/lib/qdrant'
import { openai } from '@/lib/ai'

export async function generateEmbedding(text: string): Promise<number[]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: text,
  })

  return response.data[0].embedding
}

export async function storeEmbedding(
  entityId: string,
  vector: number[],
  model: string = 'text-embedding-3-small'
) {
  const vectorId = `entity_${entityId}`

  await qdrant.upsert('entities', {
    points: [{
      id: vectorId,
      vector,
      payload: { entityId },
    }],
  })

  return vectorId
}

export async function searchSimilar(
  query: string,
  organizationId: string,
  limit: number = 10
) {
  const vector = await generateEmbedding(query)

  const results = await qdrant.search('entities', {
    vector,
    limit,
    filter: {
      must: [{
        key: 'organizationId',
        match: { value: organizationId },
      }],
    },
  })

  return results
}