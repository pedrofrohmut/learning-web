import dotenv from "dotenv"
import mongoose from "mongoose"

import userModel from "./models/user-model.js"
import productModel from "./models/product-model.js"
import productStatModel from "./models/product-stat-model.js"
import transactionModel from "./models/transaction-model.js"
import overallStatModel from "./models/overall-stat.js"
import { dataUser, dataProduct, dataProductStat, dataTransaction, dataOverallStat } from "./data.js"

dotenv.config()

const run = async () => {
    try {
        // Keep is here in case this options are ever necessary
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Connected to MongoDB: http://localhost:27017")

	// Only add data one time (comment out the ones already added)
	// await userModel.insertMany(dataUser)
	// await productModel.insertMany(dataProduct)
	// await productStatModel.insertMany(dataProductStat)
	// await transactionModel.insertMany(dataTransaction)
	await overallStatModel.insertMany(dataOverallStat)
	console.log("New data inserted in the database")
	exit(0)
    } catch (err) {
	console.error(err)
    }
}

run()
