import { EventEmitter } from "events"

const myEmitter = new EventEmitter()

// Greeter handler
const greetHandler = () => {
    console.log("Hello, World!")
}

// Goodbye handler
const goodbyeHandler = () => {
    console.log("Goodbye, World!")
}

// Hello handler
const helloHandler = (name) => {
    console.log(`Hello, ${name}!`)
}

// Register event listeners
myEmitter.on("greet", greetHandler)
myEmitter.on("goodbye", goodbyeHandler)
myEmitter.on("hello", helloHandler)

// Emit events
myEmitter.emit("greet")
myEmitter.emit("goodbye")
myEmitter.emit("hello", "John")

// Error handling
myEmitter.on("error", (err) => {
    console.log("An error occured: ", err)
})

// Simulate error
myEmitter.emit("error", new Error("Something went wrong"))
