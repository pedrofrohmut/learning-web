const express = require("express")
const path = require("path")

const app = express()

// Setup static folder
app.use(express.static(path.join(__dirname, "public")))

const PORT = process.env.PORT || 8000

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))
