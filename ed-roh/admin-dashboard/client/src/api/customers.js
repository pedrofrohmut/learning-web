import axios from "axios"

export const getCustomers = async () => {
    const urlArr = []
    urlArr.push(import.meta.env.VITE_API_BASE_URL)
    urlArr.push("client/customers")
    const url = urlArr.join("")

    const { data } = await axios.get(url)
    return data
}
