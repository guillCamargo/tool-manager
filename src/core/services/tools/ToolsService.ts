import { IToolsRepository } from "@repositories/interfaces/IToolsRepository";
import ErrorMessage from "@utils/ErrorMessage";
import { IToolDTO } from "./dtos/ToolDTO";
import { IToolListDTO } from "./dtos/ToolListDTO";
import { IToolsService } from "./IToolsService";

export class ToolsService implements IToolsService {
    constructor(
        private toolsRepository: IToolsRepository
    ) { }

    async create(data: IToolDTO) {
        try {
            await this.validateTool(data)

            const tool = await this.toolsRepository.create(data)
            return tool
        } catch (e) {
            if (e.code)
                throw e
            else
                throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }

    async validateTool(data: IToolDTO) {
        const tool = await this.findByTitle(data.title)

        if (tool) {
            throw new ErrorMessage(400, 'Título informado já existe na nossa base de dados.')
        }
        if (data.description.length > 256) {
            throw new ErrorMessage(400, 'Descrição acima do tamanho permitido: 256 caracteres.')
        }
        if (data.tags.length > 8) {
            throw new ErrorMessage(400, 'Quantidade de tags acima do máximo: 8 tags.')
        }
    }

    async findByTitle(title: string) {
        try {
            const tool = await this.toolsRepository.findByTitle(title)
            return tool
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }

    async findAll() {
        let toolsDTO: IToolListDTO = { tools: [] }
        try {
            toolsDTO.tools = await this.toolsRepository.findAll()
            return toolsDTO
        } catch {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }

    async delete(id: number) {
        try {
            return await this.toolsRepository.delete(id)
        } catch (e) {
            if (e.code)
                throw e
            else
                throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }

    async search(valor: string) {
        let toolsDTO: IToolListDTO = { tools: [] }

        try {
            toolsDTO.tools = await this.toolsRepository.search(valor)
            return toolsDTO
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }
}