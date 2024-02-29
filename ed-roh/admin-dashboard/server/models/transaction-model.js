import { Schema, model } from "mongoose"

const transactionSchema = new Schema({
    userId: Schema.Types.ObjectId,
    cost: Number,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
}, {
    timestamps: true
})

const transactionModel = model("Transaction", transactionSchema)

export default transactionModel
