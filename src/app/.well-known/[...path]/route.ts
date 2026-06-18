import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname === '/.well-known/ai-agent.json') {
    return NextResponse.json({
      name: 'EntityForge',
      description: 'AI-ready entity data infrastructure',
      api: {
        entities: '/api/entities',
        trends: '/api/trends',
        recommendations: '/api/recommendations',
      },
      capabilities: ['entity-graph', 'semantic-search', 'recommendation-engine'],
      version: '1.0.0',
    })
  }

  if (pathname === '/.well-known/agents.json') {
    return NextResponse.json({
      agents: [
        {
          name: 'entityforge-indexer',
          description: 'Indexes entities for AI recommendation',
          endpoint: '/api/entities',
        },
      ],
    })
  }

  return NextResponse.json({ error: 'Not found' }, { status: 404 })
}