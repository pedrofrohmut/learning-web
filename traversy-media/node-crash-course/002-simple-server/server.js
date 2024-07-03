import http from "http"

const server = http.createServer((req, res) => {
    //console.log(req.url)
    //console.log(req.method)

    // Returns HTML Content
    //res.setHeader("Content-type", "text/html")
    //res.statusCode = 404
    //res.write("<h1>Hello, World!</h1>")
    //res.end()

    // Returns JSON Data
    //res.writeHead(500, { "Content-Type": "application/json" })
    //res.write(JSON.stringify({ foo: "bar" }))
    //res.end()

    if (req.method !== "GET") {
        res.writeHead(405, { "Content-Type": "text/plain" })
        res.write("Method not allowed")
        res.end()
        return
    }

    try {
        // Router
        switch (req.url) {
            case "/":
                res.writeHead(200, { "Content-Type": "text/plain" })
                res.write("<h1>Home page</h1>")
                break
            case "/about":
                res.writeHead(200, { "Content-Type": "text/plain" })
                res.write("<h1>About page</h1>")
                break
            case "/error":
                throw new Error("Hard coded error here!")
            default:
                res.writeHead(404, { "Content-Type": "text/plain" })
                res.write("<h1>Page not found</h1>")
        }
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.write("Internal server error")
    } finally {
        res.end()
    }
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
