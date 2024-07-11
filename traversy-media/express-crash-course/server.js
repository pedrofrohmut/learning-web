import express from "express"
import { fileURLToPath } from "url"
import path from "path"

import loggerMiddleware from "./middlewares/logger-middleware.js"
import errorMiddleware from "./middlewares/error-middleware.js"
import notFoundMiddleware from "./middlewares/not-found-middleware.js"
import postsRoutes from "./routes/posts-routes.js"

const app = express()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Body parser middleware
app.use(express.json())

// Allow for data
app.use(express.urlencoded({ extended: false }))

// Logger Middleware
app.use(loggerMiddleware)

// Static folder
app.use(express.static(path.join(__dirname, "public")))

// Routes
app.use("/api/posts", postsRoutes)

// Route not found error middleware
app.use(notFoundMiddleware)

// Catch errors middleware
app.use(errorMiddleware)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
