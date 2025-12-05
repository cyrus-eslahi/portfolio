import { NextRequest, NextResponse } from 'next/server'
import { getSiteContent, upsertSiteContent } from '@/lib/supabaseServer'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    const keysParam = searchParams.get('keys')

    if (!keysParam) {
      return NextResponse.json(
        { error: 'Missing keys parameter' },
        { status: 400 }
      )
    }

    const keys = keysParam.split(',').map((k) => k.trim()).filter(Boolean)

    if (keys.length === 0) {
      return NextResponse.json({ data: {} })
    }

    const data = await getSiteContent(keys)

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error fetching content:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    if (!body || typeof body.key !== 'string' || typeof body.value !== 'string') {
      return NextResponse.json(
        { error: 'Invalid request body. Expected { key: string, value: string }' },
        { status: 400 }
      )
    }

    await upsertSiteContent(body.key, body.value)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error saving content:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Internal server error' },
      { status: 500 }
    )
  }
}

