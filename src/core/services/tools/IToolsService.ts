import Tool from "@entities/Tool"
import { IToolDTO } from "./dtos/ToolDTO"
import { IToolListDTO } from "./dtos/ToolListDTO"

export interface IToolsService {
    create(data: IToolDTO): Promise<Tool>
    findAll(): Promise<IToolListDTO>
    delete(id: number): Promise<any>
    search(valor: string): Promise<IToolListDTO>
    validateTool(data: IToolDTO): Promise<void>
    findByTitle(title: string): Promise<Tool>
}