import fs from "fs"
import fsPromises from "fs/promises"

// Read file Async
fs.readFile("./test.txt", "utf-8", (err, data) => {
    if (err) throw err
    console.log("Read file Async with fs:", data)
})

// Read file Sync
const data = fs.readFileSync("./test.txt", "utf-8")
console.log("Read file Sync with fs:", data)

// Read file with promise
fsPromises.readFile("./test.txt", "utf-8")
    .then(data => console.log("Read file Async with fs promises:", data))
    .catch(err => console.error(err))

// Read file with promise and async/await
try {
    const data = await fsPromises.readFile("./test.txt", "utf-8")
    console.log("Read file Async with fs promises and async/await:", data)
} catch (err) {
    console.error(err)
}

// Write file
try {
    await fsPromises.writeFile("./test2.txt", "Hello, I am writing to a file\n")
    console.log("File test2.txt have been written.")
} catch (err) {
    console.error(err)
}

// Append to file
try {
    await fsPromises.appendFile("./test2.txt", "Hello again. I am appending to file\n")
    console.log("File test2.txt have been appended")
} catch (err) {
    console.error(err)
}
