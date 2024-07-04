import http from "http"
import fs from "fs/promises"
import url from "url"
import path from "path"

// Get current dir and file name
const FILENAME = url.fileURLToPath(import.meta.url)
const DIRNAME = path.dirname(FILENAME)

const server = http.createServer(async (req, res) => {
    if (req.method !== "GET") {
        res.writeHead(405, { "Content-Type": "text/plain" })
        res.write("Method not allowed")
        res.end()
        return
    }

    let filePath
    try {
        switch (req.url) {
            case "/":
                filePath = path.join(DIRNAME, "public", "index.html")
                break
            case "/about":
                filePath = path.join(DIRNAME, "public", "about.html")
                break
            case "/error":
                throw new Error("Hard coded error here!")
            default:
                res.writeHead(404, { "Content-Type": "text/html" })
                res.write("<h1>Page not found</h1>")
        }
    } catch (err) {
        res.writeHead(500, { "Content-Type": "text/plain" })
        res.write("Internal server error")
    }

    if (filePath) {
        const file = await fs.readFile(filePath)
        res.writeHead(200, { "Content-Type": "text/html" })
        res.write(file)
    }

    res.end()
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
