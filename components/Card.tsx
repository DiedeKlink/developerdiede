import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from './Image'
import Link from './Link'
import { Project } from '@/data/projectsData'

type CardProps = {
  data: Project
}

const Card = ({ data }: CardProps) => (
  <div className="md max-w-[544px] p-4 md:w-1/3">
    <div
      className={`${
        data.imgSrc && 'h-full'
      }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
    >
      <div>
        {data.imgSrc &&
          (data.href ? (
            <Link href={`/projecten/${data.slug}`} aria-label={`Link to ${data.title}`}>
              <Image
                alt={data.title}
                src={data.imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
              />
            </Link>
          ) : (
            <Image
              alt={data.title}
              src={data.imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
            />
          ))}
      </div>
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {data.href ? (
            <Link href={data.href} aria-label={`Link to ${data.title}`}>
              {data.title}
            </Link>
          ) : (
            data.title
          )}
        </h2>
        <p className="prose mb-3 line-clamp-3 max-w-none text-gray-500 dark:text-gray-400">
          {data.description}
        </p>
        {data.href && (
          <Link
            href={`/projecten/${data.slug}`}
            className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label={`Link to ${data.title}`}
          >
            Meer <ArrowRightIcon className="inline h-6 w-6" />
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
