const outputDiv = document.querySelector("#output")
const getPostsBtn = document.querySelector("#get-posts-btn")
const addPostForm = document.querySelector("#add-post-form")

const PORT = 5000

const createPostElement = (title) => {
    const postDiv = document.createElement("div")
    postDiv.textContent = title
    output.appendChild(postDiv)
}

const getPosts = async () => {
    const res = await fetch(`http://localhost:${PORT}/api/posts`)
    if (!res.ok) {
        throw new Error("Failed to fetch posts")
    }
    const posts = await res.json()
    output.innerHTML = ""
    posts.forEach((post) => createPostElement(post.title))
}

const addPost = async (e) => {
    e.preventDefault()
    //const formData = new FormData(e.target)
    const formData = new FormData(addPostForm)
    const title = formData.get("title")

    try {
        const res = await fetch(`http://localhost:${PORT}/api/posts`, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json"
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error("Failed to add post")
        }

        const newPost = await res.json()
        createPostElement(newPost.title)
    } catch (err) {
        console.error("Error adding post: " + err.message)
    }
}

// Listeners
getPostsBtn.addEventListener("click", getPosts)
addPostForm.addEventListener("submit", addPost)
