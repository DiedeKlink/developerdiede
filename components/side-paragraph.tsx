import React from 'react'

export default function SideParagraph({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b border-b-stone-300 py-3 font-semibold dark:border-b-stone-700">
      {children}
    </div>
  )
}
