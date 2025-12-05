import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://wqdcvzbfgpmzvnllrtef.supabase.co'

export function createSupabaseClient() {
  // Try SUPABASE_SERVICE_ROLE_KEY first (recommended for server-side), fallback to SUPABASE_KEY
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY

  if (!supabaseKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY environment variable')
  }

  return createClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  })
}

export async function getSiteContent(
  keys: string[]
): Promise<Record<string, string>> {
  if (keys.length === 0) {
    return {}
  }

  // Check if Supabase is configured
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY
  if (!supabaseKey) {
    // Return empty object if not configured (will use defaults)
    return {}
  }

  try {
    const supabase = createSupabaseClient()

    const { data, error } = await supabase
      .from('site_content')
      .select('key, value')
      .in('key', keys)

    if (error) {
      console.error('Failed to fetch site content:', error.message)
      return {}
    }

    const result: Record<string, string> = {}

    // Initialize all keys with empty strings
    for (const key of keys) {
      result[key] = ''
    }

    // Fill in values from database
    if (data) {
      for (const row of data) {
        result[row.key] = row.value || ''
      }
    }

    return result
  } catch (error) {
    console.error('Error fetching site content:', error)
    return {}
  }
}

export async function upsertSiteContent(
  key: string,
  value: string
): Promise<void> {
  // Check if Supabase is configured
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_KEY
  if (!supabaseKey) {
    throw new Error('Supabase is not configured. Please set SUPABASE_SERVICE_ROLE_KEY or SUPABASE_KEY environment variable.')
  }

  try {
    const supabase = createSupabaseClient()

    const { error } = await supabase
      .from('site_content')
      .upsert({ key, value }, { onConflict: 'key' })

    if (error) {
      throw new Error(`Failed to upsert site content: ${error.message}`)
    }
  } catch (error) {
    console.error('Error upserting site content:', error)
    throw error
  }
}

