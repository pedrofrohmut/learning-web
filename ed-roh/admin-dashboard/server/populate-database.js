import dotenv from "dotenv"
import mongoose from "mongoose"

import userModel from "./models/user-model.js"
import productModel from "./models/product-model.js"
import productStatModel from "./models/product-stat-model.js"
import { dataUser, dataProduct, dataProductStat } from "./data.js"

dotenv.config()

const run = async () => {
    try {
        // Keep is here in case this options are ever necessary
        // await mongoose.connect(process.env.MONGO_URL, {
        //     useNewUrlParser: true,
        //     useUnifiedTopology: true
        // })
        conn = await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB")

	// Only add data one time
	await userModel.insertMany(dataUser)
	await productModel.insertMany(dataProduct)
	await productStatModel.insertMany(dataProductStat)
	console.log("New data inserted in the database")
    } catch (err) {
	console.error(err)
    }
}

run()
