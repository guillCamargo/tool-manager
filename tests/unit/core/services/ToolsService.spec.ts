import { expect, describe, it } from '@jest/globals';
import { ToolsRepository } from '../../../../src/infra/repositories/implamentations/ToolsRepository'
import { ToolsService } from '../../../../src/core/services/tools/ToolsService'
import Tool from '../../../../src/core/entities/Tool';
import ErrorMessage from '../../../../src/core/utils/ErrorMessage';

describe('ToolsService', () => {

    const toolMock = {
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description: "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding",
        tags: [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest"
        ]
    }

    const toolsRepository = new ToolsRepository()
    const toolsService = new ToolsService(toolsRepository)

    it('If it can persist a tool', async () => {
        jest.spyOn(Tool, 'create').mockResolvedValue({ id: 1, ...toolMock })
        jest.spyOn(Tool, 'findOne').mockResolvedValueOnce(null)

        await toolsService.create(toolMock)

        expect(Tool.create).toBeCalledWith(
            expect.objectContaining({
                title: toolMock.title
            })
        )
    })

    /* it('If it can persist a tool twice', async () => {
        jest.spyOn(Tool, 'create').mockResolvedValue({ id: 1, ...toolMock })
        jest.spyOn(Tool, 'findOne').mockResolvedValueOnce(null)
        jest.spyOn(Tool, 'findOne').mockResolvedValueOnce(Tool.build(toolMock))

        await toolsService.create(toolMock)

        expect(Tool.create).toBeCalledWith(
            expect.objectContaining({
                title: toolMock.title
            })
        )

        await expect(toolsService.create(toolMock)).rejects.toHaveProperty('message', 'Título informada já existe na nossa base de dados.')
    })

    it('If it validates a tool with description bigger then 256 length', async () => {
        jest.spyOn(Tool, 'findOne').mockResolvedValueOnce(null)

        const deviantToolDTO = { ...toolMock };
        deviantToolDTO.description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sit amet justo at elit suscipit luctus et ut dolor.'
            + 'Praesent quis tristique libero, commodo semper elit. Sed imperdiet id sapien vel commodo. Suspendisse non commodo eros. '
            + 'Suspendisse eleifend et risus in bibendum. Pellentesque luctus rutrum enim sed tincidunt.'
            + 'Pellentesque sed ex sed tortor semper tincidunt. Fusce ac sapien urna. Sed nec feugiat lorem, quis pulvinar nunc.'

        await expect(toolsService.validateTool(deviantToolDTO)).rejects.toHaveProperty('message', 'Descrição acima do tamanho permitido: 256 caracteres.')
    })

    it('If it validates a tool with above 8 tags', async () => {
        jest.spyOn(Tool, 'findOne').mockResolvedValueOnce(null)

        const deviantToolDTO = { ...toolMock };
        deviantToolDTO.tags = [
            "api",
            "json",
            "schema",
            "node",
            "github",
            "rest",
            "web",
            "framework",
            "node"
        ]

        expect(deviantToolDTO.tags).toHaveLength(9)

        await expect(toolsService.validateTool(deviantToolDTO)).rejects.toHaveProperty('message', 'Quantidade de tags acima do máximo: 8 tags.')
    }) */
})