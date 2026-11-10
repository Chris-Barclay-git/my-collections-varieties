import db from './connection'
import { Variety, VarietyData } from '../../models/varieties'

const columns = ['id', 'name', 'colour', 'country']

export async function getVarieties() {
  const result = await db('varieties').select(...columns)
  return result as Variety[]
}

export async function getVarietyById(id: number) {
  const result = await db('varieties')
    .select(...columns)
    .where('id', id)
    .first()

  return result as Variety | undefined
}

// ...

export async function addVariety(data: VarietyData) {
  const [variety] = await db('varieties')
    .insert({
      name: data.name,
      colour: data.colour,
      country: data.country,
    })
    .returning(columns)

  return variety as Variety
}

export async function updateVariety(
  id: number,
  data: Partial<VarietyData>,
): Promise<Variety | undefined> {
  const [variety] = await db('varieties')
    .where('id', id)
    .update({
      name: data.name,
      colour: data.colour,
      country: data.country,
    })
    .returning(columns)

  return variety as Variety | undefined
}

export async function deleteVariety(id: number): Promise<number> {
  return db('varieties').where('id', id).delete()
}
