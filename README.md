# Zotomic

**The Infrastructure Behind AI Recommendations**

Connect your store, blog, or videos. We transform your content into AI-ready data that ChatGPT, Claude, Gemini trust and recommend.

## Features

- **Entity Graph** - Build relationships between products, reviews, videos, blogs
- **AI Trust Score™** - Measure freshness, authority, consistency, reviews, citations
- **Recommendation Engine** - Structured recommendations for AI systems
- **Multi-Model Support** - Works with ChatGPT, Gemini, Claude, Perplexity
- **50+ Integrations** - Shopify, WooCommerce, WordPress, YouTube, Amazon, Etsy

## Tech Stack

- Next.js 15 (React 19)
- TypeScript
- Tailwind CSS
- Supabase (PostgreSQL + TimescaleDB)
- Redis
- Qdrant (Vector storage)
- OpenAI, Anthropic, Google AI

## Setup

1. Clone and install dependencies:
```bash
npm install
```

2. Set up environment variables (`.env.local`):
```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=anon-key
SUPABASE_SERVICE_ROLE_KEY=service-key
OPENAI_API_KEY=your-key
ANTHROPIC_API_KEY=your-key
GOOGLE_AI_API_KEY=your-key
```

3. Run development server:
```bash
npm run dev
```

4. Deploy to Vercel:
```bash
git push vercel main
```

## API Endpoints

- `/api/entities` - Entity CRUD
- `/api/recommendations` - AI recommendations
- `/api/trends` - Trend data
- `/api/visibility` - AI visibility tracking
- `/api/mcp` - MCP endpoint
- `/.well-known/ai-agent.json` - AI agent discovery
- `/.well-known/agents.json` - Agents list

## Pricing

- **Free** - 1 integration, 100 entities
- **Starter $49** - 5 integrations, 5,000 entities
- **Pro $199** - Unlimited integrations, 50,000 entities
- **Enterprise $999+** - Private cloud, white label