import { MongoClient } from "mongodb"

import { mongo_url } from "./secrets.js"

const client = new MongoClient(mongo_url)

const run = async () => {
    try {
        await client.connect()
        console.log("Success")
    } catch (err) {
        console.error("Error")
        throw err
    } finally {
        await client.close()
        console.log("Connection closed")
    }
}

run()
