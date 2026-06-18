import { QdrantClient } from '@qdrant/js-client-rest'

export const qdrant = new QdrantClient({
  url: process.env.NEXT_PUBLIC_QDRANT_URL || 'http://localhost:6333',
})

export const ensureCollectionExists = async (name: string, vectorSize: number = 1536) => {
  try {
    await qdrant.getCollection(name)
  } catch {
    await qdrant.createCollection(name, {
      vectors: { size: vectorSize, distance: 'Cosine' },
    })
  }
}