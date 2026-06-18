import { openai, anthropic, genAI } from './ai'
import { supabaseAdmin } from '@/db'
import { z } from 'zod'

const QuerySchema = z.object({
  query: z.string(),
  organizationId: z.string(),
  engine: z.enum(['chatgpt', 'gemini', 'claude']),
})

export async function generateRecommendation(
  query: string,
  organizationId: string
) {
  const entities = await supabaseAdmin
    .from('entities')
    .select('*')
    .eq('organization_id', organizationId)
    .limit(50)

  const context = entities.data?.map(e => ({
    id: e.id,
    title: e.title,
    type: e.entity_type,
    description: e.description,
  })) || []

  const prompt = `Based on the query "${query}", recommend the best products from this catalog. Return JSON array with id, title, score (1-100), and reason. Catalog: ${JSON.stringify(context)}`

  const completion = await openai.chat.completions.create({
    model: 'gpt-4-turbo',
    messages: [{ role: 'user', content: prompt }],
    response_format: { type: 'json_object' },
  })

  return JSON.parse(completion.choices[0].message.content || '[]')
}

export async function simulateAIModel(
  query: string,
  engine: 'chatgpt' | 'gemini' | 'claude'
) {
  const prompts = {
    chatgpt: `User asks: "${query}". Provide a direct product recommendation with reasons.`,
    gemini: `User asks: "${query}". Return structured recommendation data.`,
    claude: `User asks: "${query}". Give thoughtful recommendation analysis.`,
  }

  try {
    switch (engine) {
      case 'chatgpt':
        const gpt = await openai.chat.completions.create({
          model: 'gpt-4-turbo',
          messages: [{ role: 'user', content: prompts.chatgpt }],
        })
        return gpt.choices[0].message.content
      case 'gemini':
        const gemini = genAI.getGenerativeModel({ model: 'gemini-pro' })
        const result = await gemini.generateContent(prompts.gemini)
        return result.response.text()
      case 'claude':
        const claude = await anthropic.messages.create({
          model: 'claude-3-sonnet-20240229',
          max_tokens: 1024,
          messages: [{ role: 'user', content: prompts.claude }],
        })
        return (claude.content[0] as any)?.text ?? ''
    }
  } catch (error) {
    return `Simulation error: ${error}`
  }
}