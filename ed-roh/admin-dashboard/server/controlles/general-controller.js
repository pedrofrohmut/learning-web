import userModel from "../models/user.js"

export const getUser = async (req, res) => {
    try {
        const userId = req.params.id
        const user = await userModel.findById(userId)
        return res.status(200).json(user)
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
}
