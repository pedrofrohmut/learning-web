import axios from "axios"

export const getSales = async () => {
    const urlArr = []
    urlArr.push(import.meta.env.VITE_API_BASE_URL)
    urlArr.push("sales/sales")
    const url = urlArr.join("")

    const { data } = await axios.get(url)
    return data
}
