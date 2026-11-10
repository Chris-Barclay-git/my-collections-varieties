import express from 'express'
import * as db from '../db/varieties'

const router = express.Router()

//get
//api/v1/varieties
router.get('/', async (req, res) => {
  try {
    const varieties = await db.getVarieties()

    res.json(varieties)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})
//get by id
router.get('/:id', async (req, res) => {
  try {
    const variety = await db.getVarietyById(Number(req.params.id))

    if (!variety) {
      return res.status(404).send('No variety found')
    }

    res.json(variety)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})
//post
router.post('/', async (req, res) => {
  try {
    const variety = await db.addVariety(req.body)
    res.status(201).json(variety)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})
//put/patch
router.patch('/:id', async (req, res) => {
  try {
    const variety = await db.updateVariety(Number(req.params.id), req.body)

    if (!variety) {
      return res.status(404).send('No variety found')
    }

    res.json(variety)
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})
//delete
router.delete('/:id', async (req, res) => {
  try {
    const count = await db.deleteVariety(Number(req.params.id))

    if (count === 0) {
      return res.status(404).send('No variety found')
    }

    res.status(204).send()
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    } else {
      console.error(error)
    }
    res.status(500).send('Something went wrong')
  }
})

export default router
