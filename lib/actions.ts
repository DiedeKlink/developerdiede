'use server'

import { revalidatePath } from 'next/cache'

export async function FilterBtn() {
  revalidatePath('/projecten', 'page')
}
