'use client'

import { ArrowLeftIcon } from '@radix-ui/react-icons'
import { cN } from 'lib/utils'

export default function BackButton({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <button
      onClick={() => history.back()}
      className={cN(
        'mt-1 flex items-center gap-x-2 rounded-md border-transparent bg-black/5 px-5 py-3 text-gray-900 opacity-75 transition hover:opacity-100 dark:bg-white/5 dark:text-white',
        className
      )}
    >
      <ArrowLeftIcon />
      {children}
    </button>
  )
}
