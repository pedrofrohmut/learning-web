import { Router } from "express"

import { getProducts, getCustomers, getTransactions } from "../controlles/client-controller.js"

const router = Router()

router.get("/products", getProducts)
router.get("/customers", getCustomers)
router.get("/transactions", getTransactions)

export default router
