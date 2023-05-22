import Tool from "../../../core/entities/Tool"
import { IToolDTO } from "../../../core/services/tools/dtos/ToolDTO"

export interface IToolsRepository {
    findAll(): Promise<Tool[]>
    findByTitle(title: string): Promise<Tool>
    create(toolDTO: IToolDTO): Promise<Tool>
    delete(id: number): Promise<any>
    search(valor: string): Promise<Tool[]>
}