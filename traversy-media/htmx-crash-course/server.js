import express from "express"
import users from "./data/users.js"

const app = express()

app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.get("/users", (req, res) => {
    const limit = Number(req.query.limit) || 10

    setTimeout(() => {
        return res.send(`
            <h1 class="text-2xl font-bold my-4">Users</h1>
            <ul>
                ${users
                    .slice(0, limit)
                    .map((user) => `<li>${user.name}</li>`)
                    .join("")}
            </ul>
        `)
    }, 2000)
})

app.listen(3000, () => {
    console.log("Sever listening on port 3000")
})
