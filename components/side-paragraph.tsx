import React from 'react'

export default function SideParagraph({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-b-stone-700 py-3 font-semibold">{children}</div>
}
