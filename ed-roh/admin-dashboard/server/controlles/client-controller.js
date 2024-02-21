import productModel from "../models/product-model.js"
import productStatModel from "../models/product-stat-model.js"

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
