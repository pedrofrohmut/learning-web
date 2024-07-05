import path from "path"
import url from "url"

const filePath = "./dir1/dir2/test.txt"

// basename
console.log(path.basename(filePath))

// dirname
console.log(path.dirname(filePath))

// extname
console.log(path.extname(filePath))

// parse
console.log(path.parse(filePath))

// When using esmodules you lose access to __filename and __dirname
// These lines create those variables again for you
const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
console.log(__filename)
console.log(__dirname)

// join
const filePath2 = path.join(__dirname, "dir1", "dir2", "tests2.txt")
console.log(filePath2)

// resolve
const filePath3 = path.resolve(__dirname, "dir1", "dir2", "test3.txt")
console.log(filePath3)
