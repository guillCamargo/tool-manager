import Tool from "../../../core/entities/Tool";
import { IToolsRepository } from "../interfaces/IToolsRepository";
import { IToolDTO } from "../../../core/services/tools/dtos/ToolDTO";
import ErrorMessage from "../../../core/utils/ErrorMessage";
import { Op, Sequelize } from "sequelize";

export class ToolsRepository implements IToolsRepository {
    async findAll(): Promise<Tool[]> {
        return Tool.findAll()
    }
    async findByTitle(title: string): Promise<Tool> {
        return Tool.findOne({
            where: Sequelize.where(
                Sequelize.fn('upper', Sequelize.col('title')),
                title.toUpperCase())
        })
    }
    async create(toolDTO: IToolDTO): Promise<Tool> {
        return Tool.create(toolDTO)
    }
    async delete(id: number): Promise<any> {

        await Tool.destroy({
            where: { id: id }
        }).then((rowDeleted) => {
            if (rowDeleted !== 0)
                return rowDeleted
            else
                throw new ErrorMessage(400, `Não foi possível excluir ferramenta: ${id}`)
        }).catch((e) => {
            throw e
        });
    }
    async search(valor: string): Promise<Tool[]> {
        return Tool.findAll({
            where: {
                [Op.or]: [
                    { title: { [Op.like]: '%' + valor + '%' } },
                    { link: { [Op.like]: '%' + valor + '%' } },
                    { description: { [Op.like]: '%' + valor + '%' } },
                    Sequelize.fn('JSON_CONTAINS', Sequelize.col('tool.tags'), '"' + valor + '"')
                ],
            }
        })
    }
}