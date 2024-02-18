import { Router } from "express"

import { getUser } from "../controlles/general-controller.js"

const router = Router()

router.get("/user/:id", getUser)

export default router
