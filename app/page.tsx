import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import Link from 'next/link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import H1 from '@/components/H1'

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)

  return (
    <main className="h-screen">
      <div className="mt-5 flex flex-col items-center justify-center border-b border-t border-gray-200 py-[50px] dark:border-gray-700">
        <H1>Frontend Ontwikkelaar</H1>
        <p className="text-xl">Diede Klinkenberg</p>
        <Link
          href={`/projecten/`}
          className="mt-[50px] text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          aria-label={`Link naar projectpagina`}
        >
          Bekijk projecten <ArrowRightIcon className="inline h-6 w-6" />
        </Link>
      </div>
    </main>
  )
}
