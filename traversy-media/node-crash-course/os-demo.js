import os from "os"

// Info about the current user in the os
console.log(os.userInfo())

// Memory
console.log(`Free: ${os.freemem()}, Total: ${os.totalmem()}`)

// CPU
console.log(os.cpus())
