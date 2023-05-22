import Tool from "../../../core/entities/Tool";
import { IToolsRepository } from "../interfaces/IToolsRepository";
import { IToolDTO } from "../../../core/services/tools/dtos/ToolDTO";
import ErrorMessage from "../../../core/utils/ErrorMessage";
import { Op, Sequelize } from "sequelize";

export class ToolsRepository implements IToolsRepository {
    async findAll(): Promise<Tool[]> {
        try {
            return Tool.findAll()
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }
    async findByTitle(title: string): Promise<Tool> {
        try {
            return Tool.findOne({
                where: Sequelize.where(
                    Sequelize.fn('upper', Sequelize.col('title')),
                    title.toUpperCase())
            })
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }
    async create(toolDTO: IToolDTO): Promise<Tool> {
        try {
            return Tool.create(toolDTO)
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
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
        try {
            return Tool.findAll({
                where: {
                    [Op.or]: [
                        { title: { [Op.like]: '%' + valor + '%' } },
                        { link: { [Op.like]: '%' + valor + '%' } },
                        { description: { [Op.like]: '%' + valor + '%' } },
                        Sequelize.fn('JSON_CONTAINS', Sequelize.col('tags'), '"' + valor + '"')
                    ],
                }
            })
        } catch (e) {
            throw new ErrorMessage(500, 'Erro inesperado no servidor.')
        }
    }
}