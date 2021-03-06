import dotenv from 'dotenv'
dotenv.config()

import fastify from 'fastify'
import app from './src/app'

const server = fastify()
server.register(app, { prefix: '/api' })

const port = process.env.PORT || 3001
server.listen(port, function (err, address) {
  if (err) return console.log(err)
  console.log(`server listening on ${address}`)
})
