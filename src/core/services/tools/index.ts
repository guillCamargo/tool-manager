import { ToolsController } from "@controllers/ToolsController"
import { MySQLToolsRepository } from "@repositories/implementations/MySQLToolsRepository"
import { ToolsService } from "./ToolsService"

const toolsRepository = new MySQLToolsRepository

const toolsService = new ToolsService(toolsRepository)

const toolsController = new ToolsController(toolsService)

export { toolsService, toolsController }