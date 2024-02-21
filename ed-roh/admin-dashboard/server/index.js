import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"

// Routes
import clientRoutes from "./routes/client-routes.js"
import generalRoutes from "./routes/general-routes.js"
import managementRoutes from "./routes/management-routes.js"
import salesRoutes from "./routes/sales-routes.js"

// Setup env variables
dotenv.config()

const app = express()

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }))
app.use(morgan("common"))
app.use(cors())

// Routes
app.use("/client", clientRoutes)
app.use("/general", generalRoutes)
app.use("/management", managementRoutes)
app.use("/sales", salesRoutes)

const PORT = process.env.PORT || 9000

const main = async () => {
    let conn;
    try {
        // Keep is here in case this options are ever necessary
        // conn = await mongoose.connect(process.env.MONGO_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // })
        conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")
        app.listen(PORT, console.log("Server listening at http://localhost:", PORT))
    } catch (err) {
        console.error(err)
    }
}

main()
