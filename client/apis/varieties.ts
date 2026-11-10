import request from 'superagent'
import { Variety } from '../../models/varieties'

const rootURL = new URL('/api/v1/varieties', document.baseURI)

export async function getVarieties() {
  const res = await request.get(rootURL.href)
  return res.body as Variety[]
}

export async function deleteVarietiesByID(id: number) {
  await request.delete(`${rootURL.href}/${id}`)
}
