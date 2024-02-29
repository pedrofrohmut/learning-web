import axios from "axios"

export const getTransactions = async args => {
    const urlArr = []
    urlArr.push(import.meta.env.VITE_API_BASE_URL)
    urlArr.push("client/transactions")
    urlArr.push("?pageSize=" + args.pageSize)
    urlArr.push("&pageNumber=" + args.pageNumber)

    if (args.userId) {
	urlArr.push("&userId=" + args.userId)
    }

    const url = urlArr.join("")

    const { data } = await axios.get(url)
    return data
}
