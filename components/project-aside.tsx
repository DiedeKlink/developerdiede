import React from 'react'
import SideParagraph from './side-paragraph'
import SocialIcon from './social-icons'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import BackButton from './back-btn'

export default function ProjectAside({ project }) {
  return (
    <>
      <aside className="order-last lg:order-none">
        <div className="min-w-[230px] rounded-md bg-black/5 p-4 text-gray-900 dark:bg-stone-900 dark:text-white ">
          <SideParagraph>Categorie: {project.category}</SideParagraph>
          <SideParagraph>
            <p className="mb-2">Taal: </p>
            {project.tech.split(',').map((tech, index) => (
              <Link
                href={`/projecten?tech=${tech.trim().toLowerCase()}`}
                key={index}
                className="mb-2 mr-2 inline-block rounded-md bg-black/5 px-2 py-1 dark:bg-white/5"
              >
                {tech}
              </Link>
            ))}
          </SideParagraph>
          {project.github && (
            <SideParagraph>
              <SocialIcon kind="github" href={project.github} size={6} />
            </SideParagraph>
          )}
          <SideParagraph>
            <Link target="_blank" href={project.href}>
              <button className="mt-1 flex items-center gap-x-2 rounded-md border-transparent bg-black/5 px-5 py-3 text-gray-900 opacity-75 transition hover:opacity-100 dark:bg-white/5 dark:text-white">
                {project.href.includes('.apk') ? 'Download App' : 'Project Website'}
                <ExternalLinkIcon />
              </button>
            </Link>
          </SideParagraph>
        </div>
        <BackButton className="mt-5 w-[100%]">Terug</BackButton>
      </aside>
    </>
  )
}
