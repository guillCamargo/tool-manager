import { Router } from "express";
import { toolsController } from "./core/services/tools";

const router = Router()

router.get('/tools', (req, res) => {
    return toolsController.findAll(res)
})

router.post('/tools', (req, res) => {
    return toolsController.create(req,res)
})

router.delete('/tools/:id', (req, res) => {
    return toolsController.delete(req, res)
})

router.get('/tools/searching', (req, res) => {
    return toolsController.search(req, res)
})

export { router }