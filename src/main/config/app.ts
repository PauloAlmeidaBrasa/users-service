import express from 'express'
import setupRoutes from './routes'
import setupMiddlewares from './middlewares'

const app = express()
setupRoutes(app)
setupMiddlewares(app)
export default app
