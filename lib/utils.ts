import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Convention shadcn/ui : merge conditionnel de classes Tailwind.
 * Les composants déposés dans components/ui/ l'importent depuis "@/lib/utils".
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
