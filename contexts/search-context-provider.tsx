'use client'

import { FilterBtn } from 'lib/actions'
import React, { createContext } from 'react'

type SearchContextProviderProps = {
  children: React.ReactNode
}

type TSearchContext = {
  handlePageRevalidation: () => Promise<void>
}

export const SearchContext = createContext<TSearchContext | null>(null)

export default function SearchContextProvider({ children }: SearchContextProviderProps) {
  //state

  //derived state

  //event handlers
  const handlePageRevalidation = async () => {
    await FilterBtn()
  }

  return (
    <SearchContext.Provider
      value={{
        handlePageRevalidation,
      }}
    >
      {children}
    </SearchContext.Provider>
  )
}
