import express from "express"
import syncModels from "./core/utils/SyncModels"
import { router } from "./routes"

const app = express()

app.use(express.json())
app.use(router)

syncModels()

export { app }