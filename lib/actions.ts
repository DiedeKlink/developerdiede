'use server'

import { revalidatePath } from 'next/cache'
import { useRouter } from 'next/navigation'

export async function FilterBtn() {
  revalidatePath('/projecten', 'page')
}
