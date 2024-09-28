import H1 from '@/components/H1'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Projecten' })

export default function page({ params }) {
  const slug = params.slug

  const project = projectsData.find((project) => project.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  console.log(project)

  return (
    <div>
      <H1>{project.title}</H1>
    </div>
  )
}
