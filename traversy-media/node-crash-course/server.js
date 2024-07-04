import { createServer } from "http"

const users = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
    { id: 3, name: "Jim White" }
]

const userIdRegex = /\/api\/users\/(\d*)/

// Logging middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`)
    next(req, res)
}

// JSON Middleware
const jsonMiddleware = (req, res, next) => {
    res.setHeader("Content-Type", "Application/json")
    next(req, res)
}

// Route handler for GET /api/users
const getUsersHandler = (req, res) => {
    res.setHeader("Content-Type", "application/json")
    res.statusCode = 200
    res.write(JSON.stringify(users))
    res.end()
}

// Route handler for GET /api/user/123
const getUserHandler = (req, res) => {
    const userId = parseInt(req.url.match(userIdRegex)[1])
    const found = users.find((user) => user.id === userId)
    if (!found) {
        res.setHeader("Content-Type", "text/plain")
        res.statusCode = 404
        res.write("User not found")
    } else {
        res.setHeader("Content-Type", "application/json")
        res.statusCode = 200
        res.write(JSON.stringify(found))
    }
    res.end()
}

// Route not found handler
const notFoundHandler = (req, res) => {
    res.setHeader("Content-Type", "text/plain")
    res.statusCode = 404
    res.write("Route not found")
    res.end()
}

const doRouting = (req, res) => {
    if (req.url === "/api/users" && req.method === "GET") {
        getUsersHandler(req, res)
    } else if (req.url.match(userIdRegex) && req.method === "GET") {
        getUserHandler(req, res)
    } else {
        notFoundHandler(req, res)
    }
}

const server = createServer((req, res) => logger(req, res, doRouting))

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
