import Tool from "@entities/Tool"
import { IToolDTO } from "@services/tools/dtos/ToolDTO"

export interface IToolsRepository {
    findAll(): Promise<Tool[]>
    findByTitle(title: string): Promise<Tool>
    create(toolDTO: IToolDTO): Promise<Tool>
    delete(id: number): Promise<any>
    search(valor: string): Promise<Tool[]>
}