import express from "express"

const people = ["John", "Jane", "Camille", "Bob", "David"]

const app = express()

// Config ejs
app.set("view engine", "ejs")
app.set("views", "views")

// Home page route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Homepage",
        message: "Hello from EJS",
        people
    })
})

app.listen(5000, () => console.log("Server running at http://localhost:5000"))
