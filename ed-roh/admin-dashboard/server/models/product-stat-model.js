import { Schema, model } from "mongoose"

const productStatSchema = new Schema({
    productId: String,
    yearlySalesTotal: Number,
    yearlyTotalSoldUnits: Number,
    year: Number,
    monthlyData: [
	{
	    month: String,
	    totalSales: Number,
	    totalUnits: Number
	}
    ],
    dailyData: [
	{
	    date: String,
	    totalSales: Number,
	    totalUnits: Number
	}
    ]
}, {
    timestamp: true
})

const productStatModel = model("ProductStat", productStatSchema)

export default productStatModel
