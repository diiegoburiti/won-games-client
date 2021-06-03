global.fetch = require('node-fetch')
import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
