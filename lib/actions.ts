'use server'

import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

export async function useFilterBtn() {
  revalidatePath('/projecten', 'page')
}
