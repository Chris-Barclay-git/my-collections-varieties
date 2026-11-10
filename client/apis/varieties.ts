import request from 'superagent'
import { Variety, VarietyData } from '../../models/varieties'

const rootURL = new URL('/api/v1/varieties', document.baseURI)

export async function getVarieties() {
  const res = await request.get(rootURL.href)
  return res.body as Variety[]
}

export async function deleteVarietiesByID(id: number) {
  await request.delete(`${rootURL.href}/${id}`)
}

export async function addVariety(variety: VarietyData) {
  const res = await request.post(`${rootURL.href}`).send(variety)
  return res.body as Variety
}

export async function updateVariety(id: number, variety: Partial<VarietyData>) {
  const res = await request.patch(`${rootURL.href}/${id}`).send(variety)
  return res.body as Variety
}
