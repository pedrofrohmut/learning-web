import axios from "axios"

export const getMapData = async () => {
    const urlArr = []
    urlArr.push(import.meta.env.VITE_API_BASE_URL)
    urlArr.push("client/geography")
    const url = urlArr.join("")

    const { data } = await axios.get(url)
    return data
}
