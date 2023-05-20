import { Request, Response } from "express";
import { IToolDTO } from "../../core/services/tools/dtos/ToolDTO";
import { IToolListDTO } from "../../core/services/tools/dtos/ToolListDTO";
import { ToolsService } from "../../core/services/tools/ToolsService";
import ErrorMessage from "../../core/utils/ErrorMessage";

export class ToolsController {
    constructor(
        private toolsService: ToolsService
    ) { }

    async create(req: Request, res: Response): Promise<Response> {
        const toolDTO: IToolDTO = req.body

        try {
            await this.validateTool(toolDTO, res)

            const tool = await this.toolsService.create(toolDTO)

            return res.status(201).send(tool);
        } catch (e) {
            (e instanceof ErrorMessage ?
                res.status(e.code).send(e) :
                res.status(500).send(new ErrorMessage(500, 'Erro inesperado no servidor.')))
        }

    }

    async validateTool(data: IToolDTO, res: Response) {
        const tool = await this.titleExists(data.title)

        if (tool) {
            throw new ErrorMessage(400, 'Título informada já existe na nossa base de dados.')
        }
        if (data.description.length > 256) {
            throw new ErrorMessage(400, 'Descrição acima do tamanho permitido: 256 caracteres.')
        }
        if (data.tags.length > 8) {
            throw new ErrorMessage(400, 'Quantidade de tags acima do máximo: 8 tags.')
        }
    }

    async titleExists(title: string) {
        return this.toolsService.findByTitle(title)
    }


    async findAll(res: Response): Promise<Response> {
        let toolsDTO: IToolListDTO = { tools: [] };
        try {
            toolsDTO.tools = await this.toolsService.findAll()

            return res.status(200).send(toolsDTO)
        } catch (e) {
            return res.status(500).send(new ErrorMessage(500, 'Erro interno no Servidor.'))
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
        let toolsDTO: IToolListDTO = { tools: [] };

        try {
            console.log(valor)
            toolsDTO.tools = await this.toolsService.search(valor)

            return res.status(201).send(toolsDTO);
        } catch (e) {
            (e instanceof ErrorMessage ?
                res.status(e.code).send(e) :
                res.status(500).send(new ErrorMessage(500, 'Erro inesperado no servidor.')))
        }
    }
}