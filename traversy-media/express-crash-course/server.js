const express = require("express")

const loggerMiddleware = require("./middlewares/logger-middleware")
const errorMiddleware = require("./middlewares/error-middleware")
const notFoundMiddleware = require("./middlewares/not-found-middleware")
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

// Route not found error middleware
app.use(notFoundMiddleware)

// Catch errors middleware
app.use(errorMiddleware)

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
