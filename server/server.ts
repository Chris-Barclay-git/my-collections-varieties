import * as Path from 'node:path'

import express from 'express'
import varietiesRoutes from './routes/varieties.ts'

const server = express()

// ADD YOUR API ROUTES HERE
server.use(express.json())
server.use('/api/v1/varieties', varietiesRoutes)

if (process.env.NODE_ENV === 'production') {
  server.use(express.static(Path.resolve('public')))
  server.use('/assets', express.static(Path.resolve('./dist/assets')))
  server.get('*', (req, res) => {
    res.sendFile(Path.resolve('./dist/index.html'))
  })
}

export default server
