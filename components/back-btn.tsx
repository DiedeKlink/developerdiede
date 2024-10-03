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
        'flex items-center gap-x-2 rounded-md bg-white/5 px-5 py-3 text-sm text-white opacity-75 transition hover:opacity-100',
        className
      )}
    >
      <ArrowLeftIcon />
      {children}
    </button>
  )
}
