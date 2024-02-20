import { Router } from "express"

import { getProducts } from "../controlles/client-controller.js"

const router = Router()

router.get("/products", getProducts)

export default router
