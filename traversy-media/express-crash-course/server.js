const express = require("express")

const loggerMiddleware = require("./middlewares/logger-middleware")
const postsRoutes = require("./routes/posts-routes")

const app = express()

// Body parser middleware
app.use(express.json())

// Allow for data
app.use(express.urlencoded({ extended: false }))

// Logger Middleware
app.use(loggerMiddleware)

// Routes
app.use("/api/posts", postsRoutes)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
