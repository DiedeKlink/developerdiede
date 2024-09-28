import H1 from '@/components/H1'
import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = genPageMetadata({ title: 'Projecten' })

export default function page({ params }) {
  const slug = params.slug

  const project = projectsData.find((project) => project.slug === slug)

  if (!project) {
    return <div>Project not found</div>
  }

  console.log(project)

  return (
    <div className="m-auto max-w-[700px] text-center">
      <H1>{project.title}</H1>
      <p className="mt-5">{project.description}</p>
      {project.imgSrc && project.href && (
        <Link target="_blank" href={project.href}>
          <Image
            src={project.imgSrc}
            className="m-auto mt-5"
            alt={project.title}
            width={400}
            height={200}
          />
        </Link>
      )}
      {project.href && (
        <Link target="_blank" href={project.href}>
          Bekijk live
        </Link>
      )}
    </div>
  )
}
