import { generateRandomNumber, celciusToFarenheit } from "./utils.js"

const randomNumber = generateRandomNumber()

console.log(randomNumber)

const celcius = generateRandomNumber()
const farenheit = celciusToFarenheit(celcius)

console.log(`Celcius: ${celcius}, Farenheit: ${farenheit}`)

// #############################################################################

import getPosts, { getPostsLength } from "./posts-controller.js"

const posts = getPosts()

console.log(posts)

console.log("Posts length: " + getPostsLength())
