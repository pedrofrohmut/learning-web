import { Schema, model } from "mongoose"

const transactionSchema = new Schema({
    // userId below is from tutorial. I just used ObjectId type that works as expected
    // userId: String,
    userId: Schema.Types.ObjectId,
    cost: Number,
    products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
    // Products below is from tutorial. And I'm using the example from mongoose docs
    // products: {
    // 	type: [mongoose.Types.ObjectId],
    // 	of: Number
    // }
}, {
    timestamps: true
})

const transactionModel = model("Transaction", transactionSchema)

export default transactionModel
