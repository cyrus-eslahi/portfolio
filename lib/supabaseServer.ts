import { createClient } from '@supabase/supabase-js'

export function createSupabaseClient() {
  const supabaseUrl = process.env.SUPABASE_URL
  const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl) {
    throw new Error('Missing SUPABASE_URL environment variable')
  }

  if (!supabaseServiceRoleKey) {
    throw new Error('Missing SUPABASE_SERVICE_ROLE_KEY environment variable')
  }

  return createClient(supabaseUrl, supabaseServiceRoleKey, {
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

  const supabase = createSupabaseClient()

  const { data, error } = await supabase
    .from('site_content')
    .select('key, value')
    .in('key', keys)

  if (error) {
    throw new Error(`Failed to fetch site content: ${error.message}`)
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
}

export async function upsertSiteContent(
  key: string,
  value: string
): Promise<void> {
  const supabase = createSupabaseClient()

  const { error } = await supabase
    .from('site_content')
    .upsert({ key, value }, { onConflict: 'key' })

  if (error) {
    throw new Error(`Failed to upsert site content: ${error.message}`)
  }
}

