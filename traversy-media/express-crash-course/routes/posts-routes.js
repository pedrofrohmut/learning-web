import express from "express"

const router = express.Router()

let posts = [
    { id: 1, title: "Post One" },
    { id: 2, title: "Post Two" },
    { id: 3, title: "Post Three" },
    { id: 4, title: "Post Four" }
]

// Get all posts
router.get("/", (req, res, next) => {
    const limit = parseInt(req.query.limit)

    if (req.query.limit !== undefined && isNaN(limit)) {
        //res.status(400).send("Invalid limit")
        const error = new Error("Invalid limit")
        error.status = 400
        return next(error)
    }

    if (limit > 0) {
        res.status(200).json(posts.slice(0, limit))
        return
    }

    res.status(200).json(posts)
})

// Get single post
router.get("/:id", (req, res, next) => {
    const postId = parseInt(req.params.id)
    if (isNaN(postId)) {
        const error = new Error("Invalid post id")
        error.status = 400
        return next(error)
    }

    const found = posts.find((x) => x.id === postId)
    if (!found) {
        //res.status(404).send(`Post with id of ${postId} not found`)
        const error = new Error(`Post with id of ${postId} not found`)
        error.status = 404
        return next(error)
    }

    res.status(200).json(found)
})

// Create post
router.post("/", (req, res, next) => {
    if (!req.body.title) {
        //res.status(400).send("Post title is required")
        const error = new Error("Post title is required")
        error.status = 400
        return next(error)
    }

    const newPost = { id: posts.lenght + 1, title: req.body.title }

    //res.status(201).json([...posts, newPost])
    res.status(201).json(newPost)
})

// Update a post
router.put("/:id", (req, res, next) => {
    const postId = parseInt(req.params.id)
    if (isNaN(postId)) {
        const error = new Error("Invalid post id")
        error.status = 400
        return next(error)
    }

    const found = posts.find((x) => x.id === postId)
    if (!found) {
        // res.status(404).send(`Post with id of ${postId} not found`)
        const error = new Error(`Post with id of ${postId} not found`)
        error.status = 404
        return next(error)
    }

    const postTitle = req.body.title
    if (!postTitle) {
        // res.status(400).send("Post title is required")
        const error = new Error("Post title is required")
        error.status = 400
        return next(error)
    }

    found.title = postTitle
    res.status(200).json(posts)
})

// Delete a post
router.delete("/:id", (req, res, next) => {
    const postId = parseInt(req.params.id)
    if (isNaN(postId)) {
        const error = new Error("Invalid post id")
        error.status = 400
        return next(error)
    }

    const found = posts.find((x) => x.id === postId)
    if (!found) {
        //res.status(404).send(`Post with id of ${postId} not found`)
        const error = new Error(`Post with id of ${postId} not found`)
        error.status = 404
        return next(error)
    }

    const newPosts = posts.filter((x) => x.id !== postId)
    res.status(200).json(newPosts)
})

export default router
