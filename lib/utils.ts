import clsx, { ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cN(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function firstUpperCase(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
