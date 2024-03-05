import overallStatModel from "../models/overall-stat.js"

export const getSales = async (_req, res) => {
    try {
	const overallStats = (await overallStatModel.find())[0]
	const { monthlyData } = overallStats

	/*
	  Have 2 lines for monthlyData
	  1 - month x totalUnits
	  2 - month x totalSales

	  ArrayOfLines => Line: {
	    id: _,
	    color: _,
	    data [{ x, y }, ...]
	  }
	 */

	const lineForSales = {
	    id: "total sales",
	    color: "green",
	    data: monthlyData.map(month => ({ x: month.month, y: month.totalSales }))
	}

	const lineForUnits = {
	    id: "total units",
	    color: "red",
	    data: monthlyData.map(month => ({ x: month.month, y: month.totalUnits }))
	}

	return res.status(200).send([ lineForSales, lineForUnits ])
    } catch (err) {
	return res.status(500).send(err.message)
    }
}
