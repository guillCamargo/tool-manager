import { Router } from "express";

const router = Router()

router.get('/status', (req, res) => {
    return res.status(200).send({ status: 'Ativo!' })
})

router.get('/tools', (req, res) => {
})

router.post('/tools', (req, res) => {
})

router.delete('/tools/:id', (req, res) => {
})

router.get('/tools/searching', (req, res) => {
})

export { router }