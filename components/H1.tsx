import { cN } from 'lib/utils'
import React from 'react'

type H1Props = {
  children: React.ReactNode
  className?: string
}

export default function H1({ children, className }: H1Props) {
  return (
    <h1
      className={cN(
        'text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14',
        className
      )}
    >
      {children}
    </h1>
  )
}
