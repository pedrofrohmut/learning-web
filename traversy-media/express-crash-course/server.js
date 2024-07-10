const express = require("express")
const path = require("path")

const app = express()

// Setup static folder
app.use(express.static(path.join(__dirname, "public")))

//app.get("/", (req, res) => {
//    //res.send({ message: "Hello, World!!!" })
//    const indexFilePath = path.join(__dirname, "public", "index.html")
//    res.sendFile(indexFilePath)
//})
//
//app.get("/about", (req, res) => {
//    //res.send({ message: "About the world" })
//    const aboutFilePath = path.join(__dirname, "public", "about.html")
//    res.sendFile(aboutFilePath)
//})

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
