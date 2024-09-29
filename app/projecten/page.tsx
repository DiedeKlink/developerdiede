import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'
import H1 from '@/components/H1'
import { Cross1Icon } from '@radix-ui/react-icons'
import { firstUpperCase } from 'lib/utils'
import FilterBtn from '@/components/filter-btn'

export const metadata = genPageMetadata({ title: 'Projecten' })

export default function Projects({ searchParams }) {
  console.log(searchParams)

  const filteredProjects = projectsData.filter((project) => {
    if (!searchParams.tech) return true
    return project.tech.toLowerCase().includes(searchParams.tech)
  })
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <H1>Projecten</H1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Projecten uit dienstverbanden, hobby- en cursusprojecten
          </p>
        </div>
        {searchParams.tech ? (
          <FilterBtn value={searchParams.tech} />
        ) : (
          <div className="py-5">Filter op:</div>
        )}
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {filteredProjects.map((d) => (
              <Card data={d} key={d.slug} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
