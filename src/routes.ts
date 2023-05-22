import { Router } from "express";
import { toolsController } from "./core/services/tools";
import { usersController } from "./core/services/users"
import { verifyJWT } from "./core/utils/VerifyJWT";
import swaggerUi from "swagger-ui-express"
import swaggerDocs from "./swagger.json"

const router = Router()

router.use('/api-docs', swaggerUi.serve);
router.get('/api-docs', swaggerUi.setup(swaggerDocs));

router.get('/tools', verifyJWT, (req, res) => {
    return toolsController.findAll(res)
})

router.post('/tools', verifyJWT, (req, res) => {
    return toolsController.create(req,res)
})

router.delete('/tools/:id', verifyJWT, (req, res) => {
    return toolsController.delete(req, res)
})

router.get('/tools/searching', verifyJWT, (req, res) => {
    return toolsController.search(req, res)
})

router.post('/login', (req, res) => {
    return usersController.login(req, res)
})

export { router }