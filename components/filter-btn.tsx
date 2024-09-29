'use client'

import { Cross1Icon } from '@radix-ui/react-icons'
import { SearchContext } from 'contexts/search-context-provider'
import { firstUpperCase } from 'lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

import React, { useCallback, useContext } from 'react'

export default function FilterBtn({ value }) {
  const searchParams = useSearchParams()
  const router = useRouter()

  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('usePetContext must be used within a PetContextProvider')
  }

  const { handlePageRevalidation } = context

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  return (
    <button
      onClick={async () => {
        await handlePageRevalidation()
        router.push('/projecten/')
      }}
      className="mb-5 flex items-center gap-x-2 rounded-md border-transparent bg-white/5 px-5 py-3 text-white opacity-75 transition hover:opacity-100"
    >
      Filter: {firstUpperCase(value)} <Cross1Icon />
    </button>
  )
}
