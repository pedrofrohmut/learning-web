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

// Data
import userModel from "./models/user-model.js"
import productModel from "./models/product-model.js"
import productStatModel from "./models/product-stat-model.js"
import { dataUser, dataProduct, dataProductStat } from "./data.js"

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

const run = async () => {
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

        // Only add data one time
        // userModel.insertMany(dataUser)
	// productModel.insertMany(dataProduct)
	// productStatModel.insertMany(dataProductStat)
    } catch (err) {
        console.error(err)
    } finally {
        //conn.close()
    }
}

run().then(() => {
    // Close Connection
    console.log("Mongoose Connection Closed")
})
