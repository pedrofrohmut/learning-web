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
	const limit = pageSize + 1 // +1 to know if hasNext

	query.skip(skipCount)
	query.limit(limit)

	const transactions = await query.exec()

	const startIndex = skipCount
	const hasPrevious = pageNumber > 0
	const hasNext = transactions.length > pageSize

	if (hasNext) {
	    const endIndex = startIndex + pageSize - 1
	    // dec 1 because of extra
	    const count = transactions.length - 1
	    // Remove extra element before sending
	    const data = transactions.slice(0, -1)

	    return res.status(200).json({
		startIndex,
		endIndex,
		count,
		pageNumber,
		pageSize,
		hasPrevious,
		hasNext,
		data
	    })
	}

	const endIndex = startIndex + transactions.length - 1
	const count = transactions.length
	const data = transactions

	return res.status(200).json({
	    startIndex,
	    endIndex,
	    count,
	    pageNumber,
	    pageSize,
	    hasPrevious,
	    hasNext,
	    data
	})
    } catch (err) {
	return res.status(500).json({ message: err.message })
    }
}
