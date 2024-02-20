import { Schema, model } from "mongoose"

const productSchema = new Schema({
    name: String,
    price: String,
    description: String,
    category: String,
    rating: Number,
    supply: Number
}, {
    timestamps: true
})

const productModel = model("Product", productSchema)

export default productModel
