const express = require("express")

const router = express.Router()

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
    { id: 4, title: "Post Four" }
]

// Get all posts
router.get("/", (req, res) => {
    const limit = parseInt(req.query.limit)

    if (req.query.limit !== undefined && isNaN(limit)) {
        res.status(400).send("Invalid limit")
        return
    }

    if (limit > 0) {
        res.status(200).json(posts.slice(0, limit))
        return
    }

    res.status(200).json(posts)
})

// Get single post
router.get("/:id", (req, res) => {
    const postId = parseInt(req.params.id)

    const found = posts.find((x) => x.id === postId)
    if (!found) {
        res.status(404).send(`Post with id of ${postId} not found`)
        return
    }

    res.status(200).json(found)
})

module.exports = router
