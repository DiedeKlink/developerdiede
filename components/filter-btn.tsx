'use client'

import { Cross1Icon } from '@radix-ui/react-icons'
import { SearchContext } from 'contexts/search-context-provider'
import { firstUpperCase } from 'lib/utils'
import { useRouter, useSearchParams } from 'next/navigation'

import React, { useCallback, useContext, useEffect, useState } from 'react'

interface FilterBtnProps {
  value: string
}

export default function FilterBtn({ value }: FilterBtnProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [param1, setParam1] = useState('')
  const context = useContext(SearchContext)
  if (!context) {
    throw new Error('usePetContext must be used within a PetContextProvider')
  }

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
        router.push('/projecten')
        router.refresh()
      }}
      className="mt-1 flex items-center gap-x-2 rounded-md border-transparent bg-black/5 px-5 py-3 text-gray-900 opacity-75 transition hover:opacity-100 dark:bg-white/5 dark:text-white"
    >
      Filter: {firstUpperCase(value)} <Cross1Icon />
    </button>
  )
}
