import productModel from "../models/product-model.js"
import productStatModel from "../models/product-stat-model.js"
import transactionModel from "../models/transaction-model.js"
import userModel from "../models/user-model.js"

export const getProducts = async (_req, res) => {
    try {
	const products = await productModel.find({})

	const productsWithStats = await Promise.all(
	    products.map(async product => {
		const stats = await productStatModel.find({ productId: product._id })
		product._doc.stats = stats
		return product._doc
	    })

	)

	return res.status(200).json(productsWithStats)
    } catch (err) {
	return res.status(500).json({ message: err.message })
    }
}

export const getCustomers = async (req, res) => {
    try {
	const customers = await userModel.find({ role: "user" }).select("-password")
	return res.status(200).json(customers)
    } catch (err) {
	return res.status(500).json({ message: err.message })
    }
}

export const getTransactions = async (req, res) => {
    try {
	const pageNumber = Number(req.query.pageNumber) || 0
	const pageSize = Number(req.query.pageSize) || 20
	const searchUserId = req.query.userId || ""
	const sortType = req.query.sortType || "noSort"

	const query = transactionModel.find()

	if (searchUserId !== "") {
	    query.where("userId").equals(searchUserId)
	}

	console.log(sortType)

	if (sortType !== "noSort") {
	    switch (sortType) {
		case "dateAsc":
		    query.sort([["createdAt", "asc"]])
		    break
		case "dateDesc":
		    query.sort([["createdAt", "desc"]])
		    break
		case "costAsc":
		    query.sort([["cost", "asc"]])
		    break
		case "costDesc":
		    query.sort([["cost", "desc"]])
		    break
	    }
	}

	const skipCount = pageNumber * pageSize

	query.skip(skipCount)
	query.limit(pageSize + 1) // +1 to know if hasNext

	const transactions = await query.exec()

	const response = {
	    startIndex: skipCount,
	    endIndex: skipCount + pageSize,
	    count: transactions.length - 1, // dec 1 because of extra
	    pageNumber,
	    pageSize,
	    hasPrevious: pageNumber > 0,
	    hasNext: transactions.length > pageSize,
	    data: transactions.slice(0, -1)  // Remove extra element before sending
	}

	return res.status(200).json(response)
    } catch (err) {
	return res.status(500).json({ message: err.message })
    }
}
