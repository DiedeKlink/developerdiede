import BackButton from '@/components/back-btn'
import H1 from '@/components/H1'
import ProjectAside from '@/components/project-aside'
import SideParagraph from '@/components/side-paragraph'
import SocialIcon from '@/components/social-icons'
import projectsData from '@/data/projectsData'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
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
    <main className="flex flex-col lg:flex-row">
      <ProjectAside project={project} />
      <div className="m-auto max-w-[700px] p-4 ">
        <H1>{project.title}</H1>
        <p className="mt-5" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        {project.imgSrc && project.href && (
          <Link target="_blank" href={project.href}>
            <Image
              src={project.imgSrc}
              className=" mt-5"
              alt={project.title}
              width={400}
              height={200}
              unoptimized={true}
            />
          </Link>
        )}
        <BackButton className="mt-5">Terug naar projecten</BackButton>
      </div>
    </main>
  )
}
