import { ToolsController } from "../../../infra/controllers/ToolsController"
import { ToolsRepository } from "../../../infra/repositories/implamentations/ToolsRepository"
import Tool from "../../entities/Tool"
import { ToolsService } from "./ToolsService"

const toolsRepository = new ToolsRepository

const toolsService = new ToolsService(toolsRepository)

const toolsController = new ToolsController(toolsService)

export { toolsService, toolsController }