import { IToolsRepository } from "../../../infra/repositories/interfaces/IToolsRepository";
import ErrorMessage from "../../utils/ErrorMessage";
import { IToolDTO } from "./dtos/ToolDTO";

export class ToolsService {
    constructor(
        private toolsRepository: IToolsRepository
    ) { }

    async create(data: IToolDTO) {
        return this.toolsRepository.create(data);
    }

    async findByTitle(title: string) {
        return this.toolsRepository.findByTitle(title)
    }

    async findAll() {
        return this.toolsRepository.findAll()
    }

    async delete(id: number) {
        return this.toolsRepository.delete(id)
    }

    async search(valor: string) {
        return this.toolsRepository.search(valor)
    }
}