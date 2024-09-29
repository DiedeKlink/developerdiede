import H1 from '@/components/H1'
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
    <main className="flex">
      <aside className="rounded-md p-4 dark:bg-stone-900">
        <SideParagraph>Categorie: {project.category}</SideParagraph>
        <SideParagraph>
          <p className="mb-2">Techniek: </p>
          {project.tech.split(',').map((tech, index) => (
            <Link
              href={`/projecten?tech=${tech.trim().toLowerCase()}`}
              key={index}
              className="mr-4 inline-block rounded-md bg-white/5 px-2 py-1"
            >
              {tech}
            </Link>
          ))}
        </SideParagraph>
        <SideParagraph>
          <SocialIcon kind="github" href={project.github} size={6} />
        </SideParagraph>
        <SideParagraph>
          <Link target="_blank" href={project.href}>
            <button className="flex items-center gap-x-2 rounded-md bg-white/5 px-5 py-3 text-white opacity-75 transition hover:opacity-100">
              Project Website <ExternalLinkIcon />
            </button>
          </Link>
        </SideParagraph>
      </aside>
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
            />
          </Link>
        )}
      </div>
    </main>
  )
}
