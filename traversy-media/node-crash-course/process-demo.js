// Process argv
console.log(process.argv)

// Process env
console.log(process.env)

// Process pid
console.log(process.pid)

// Process cwd
console.log(process.cwd())

// Process title
console.log(process.title)

// Process memoryUsage()
console.log(process.memoryUsage())

// Process uptime
console.log(process.uptime())

// Event listener for process exit
process.on("exit", (code) => {
    console.log("About to exit with code: " + code)
})

// Process exit (0 - sucess)
process.exit(0)
