import { Schema, model } from "mongoose"

const overallStatSchema = new Schema({
    totalCustomers: Number,
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
    ],
    salesByCategory: { type: Map, of: Number }
}, {
    timestamps: true
})

const overallStatModel = model("OverallStat", overallStatSchema)

export default overallStatModel
