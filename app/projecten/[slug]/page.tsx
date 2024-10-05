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

  return (
    <main className="flex flex-col items-start lg:flex-row">
      <ProjectAside project={project} />
      <div className="m-auto max-w-[700px] p-4 ">
        <H1>{project.title}</H1>
        <p className="mt-5" dangerouslySetInnerHTML={{ __html: project.description }}></p>
        {project.subjects && (
          <div className="mt-5">
            <h2 className="mt-5 text-2xl font-extrabold">Behandelde onderwerpen</h2>
            <ul className="list-disc pl-[40px]">
              {project.subjects.map((subject, index) => (
                <li key={index}>{subject}</li>
              ))}
            </ul>
          </div>
        )}
        {project.imgSrc && project.href && (
          <Link target="_blank" href={project.href}>
            <Image
              src={project.imgSrc}
              className=" mt-5"
              alt={project.title}
              width={400}
              height={200}
            />
          </Link>
        )}
        <BackButton className="mt-5">Terug naar projecten</BackButton>
      </div>
    </main>
  )
}
