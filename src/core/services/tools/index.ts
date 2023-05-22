import { ToolsController } from "@controllers/ToolsController"
import { ToolsRepository } from "@repositories/implamentations/ToolsRepository"
import { ToolsService } from "./ToolsService"


const toolsRepository = new ToolsRepository

const toolsService = new ToolsService(toolsRepository)

const toolsController = new ToolsController(toolsService)

export { toolsService, toolsController }