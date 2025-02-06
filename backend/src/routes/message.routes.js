import {Router} from 'express'
import {createMessage,deleteMessage,fetchMessage} from '../controllers/message.controller.js'

const router= Router()

router.route("/").post(createMessage)
router.route("/:conversationId").get(fetchMessage)
router.route("/delete").post(deleteMessage)

export default router