import url from "url"

const urlString = "http://www.google.com/search?q=foo&limit=5"

// URL
const urlObj = new URL(urlString)

console.log(urlObj)

// format
console.log(url.format(urlObj))

// import.meta.url - File url
console.log(url.fileURLToPath(import.meta.url))

console.log(urlObj.search)

const params = new URLSearchParams(urlObj.search)
console.log(params)
console.log(params.get("q"))
params.delete("limit")
