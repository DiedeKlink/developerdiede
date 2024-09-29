import React from 'react'
import SideParagraph from './side-paragraph'
import SocialIcon from './social-icons'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function ProjectAside({ project }) {
  return (
    <aside className="order-last min-w-[230px] rounded-md p-4 dark:bg-stone-900 lg:order-none">
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
  )
}
