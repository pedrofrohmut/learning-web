import crypto from "crypto"

// Create hash
const hash = crypto.createHash("sha256")
hash.update("password1234")
console.log(hash.digest("hex"))

// Random bytes
crypto.randomBytes(16, (err, buf) => {
    if (err) throw err
    console.log(buf.toString("hex"))
})

// Create Cipheriv & Create Decipheriv
const algorithm = "aes-256-cbc"
const key = crypto.randomBytes(32)
const iv = crypto.randomBytes(16)

console.log("Key: ", key)
console.log("Iv: ", iv)

const cipher = crypto.createCipheriv(algorithm, key, iv)
let encrypted = cipher.update("Hello, this is a secret message", "utf-8", "hex")
encrypted += cipher.final("hex")

const decipher = crypto.createDecipheriv(algorithm, key, iv)
let decrypted = decipher.update(encrypted, "hex", "utf-8")
decrypted += decipher.final("utf-8")

setTimeout(() => {
    console.log("Encrypted: ", encrypted)
    console.log("Decrypted: ", decrypted)
}, 1000)
