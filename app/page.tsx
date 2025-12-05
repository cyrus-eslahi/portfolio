import { getSiteContent } from '@/lib/supabaseServer'
import HomeClient from '@/components/HomeClient'

export default async function Home() {
  const content = await getSiteContent([
    'hero_label',
    'hero_title',
    'hero_subtitle',
    'hero_latest_build',
    'hero_focus',
    'hero_learning',
    'project1_title',
    'project1_description',
    'project1_tag1',
    'project1_tag2',
    'project2_title',
    'project2_description',
    'project2_tag1',
    'project3_title',
    'project3_description',
    'project3_tag1',
    'project3_tag2',
  ])

  return <HomeClient content={content} />
}
