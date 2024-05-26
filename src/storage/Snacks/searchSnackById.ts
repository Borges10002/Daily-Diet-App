import { getSnacks } from './getSnacks'

export async function searchSnacksById(id: number) {
  try {
    const storage = await getSnacks()
    const snacks = storage.flatMap((section) => section.data)
    const filteredSnacks = snacks.filter((snack) => snack.id === id)
    return filteredSnacks
  } catch (error) {
    throw new Error('Failed to search snacks by ID.')
  }
}
