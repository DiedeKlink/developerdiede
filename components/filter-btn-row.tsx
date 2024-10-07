import projectsData from '@/data/projectsData'
import { firstUpperCase } from 'lib/utils'
import Link from 'next/link'

export default function FilterBtnRow() {
  const techs = projectsData.map((project) => project.tech)
  const splitTechs = techs.map((tech) => tech.split(',').map((t) => t.trim().toLowerCase()))
  const uniqueTechs = [...new Set(splitTechs.flat())]

  return (
    <>
      <span className="mr-4 mt-4">Filter op:</span>{' '}
      {uniqueTechs.map((tech) => (
        <Link href={`/projecten?tech=${tech}`} key={tech}>
          <button className="mr-5 mt-1 inline-block items-center gap-x-2 rounded-md border-transparent bg-black/5 px-5  py-3 text-gray-900 opacity-75 transition hover:opacity-100  dark:bg-white/5 dark:text-white">
            {firstUpperCase(tech)}
          </button>
        </Link>
      ))}{' '}
    </>
  )
}
