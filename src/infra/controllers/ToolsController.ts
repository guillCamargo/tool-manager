import { Request, Response } from "express";
import { IToolsService } from "../../core/services/tools/IToolsService";

export class ToolsController {
    constructor(
        private toolsService: IToolsService
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        try {
            const toolDTO = await this.toolsService.create(req.body)

            return res.status(201).send(toolDTO);
        } catch (e) {
            return res.status(e.code).send(e)
        }
    }

    async findAll(res: Response): Promise<Response> {
        try {
            const toolListDTO =  await this.toolsService.findAll()

            return res.status(200).send(toolListDTO)
        } catch (e) {
            return res.status(e.code).send(e)
        }
    }

    async delete(req: Request, res: Response): Promise<Response> {
        const params = req.params

        try {
            const id = +params.id

            const rowDeleted = await this.toolsService.delete(id)
            return res.status(204).send(rowDeleted)
        } catch (e) {
            return res.status(e.code).send(e)
        }
    }

    async search(req: Request, res: Response): Promise<Response> {
        const valor = req.query.valor.toString()

        try {
            const toolListDTO = await this.toolsService.search(valor)

            return res.status(201).send(toolListDTO);
        } catch (e) {
            return res.status(e.code).send(e)
        }
    }
}