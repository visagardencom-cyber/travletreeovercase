import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'
import { GoogleGenerativeAI } from '@google/generative-ai'

export const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

export const genAI = new GoogleGenerativeAI(
  process.env.GOOGLE_AI_API_KEY || ''
)

export type EmbeddingModel = 'openai' | 'text-embedding-3-small' | 'text-embedding-3-large'

export type ChatModel = 'gpt-4' | 'gpt-4-turbo' | 'claude-3-opus' | 'claude-3-sonnet' | 'gemini-pro'