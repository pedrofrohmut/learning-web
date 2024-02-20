import { Schema, model } from "mongoose"

const userSchema = new Schema({
    name: { type: String, required: true, min: 2, max: 100 },
    email: { type: String, required: true, max: 100, unique: true },
    password: { type: String, required: true, min: 3 },
    city: String,
    state: String,
    country: String,
    occupation: String,
    phoneNumber: String,
    transactions: Array,
    role: { type: String, enum: ["user", "admin", "superadmin"], default: "admin" }
}, {
    timestamps: true
})

const userModel = model("User", userSchema)

export default userModel
