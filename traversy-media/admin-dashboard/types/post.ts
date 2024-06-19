import { PostComment } from "./post-comment"

type Post = {
    id: string
    title: string
    body: string
    author: string
    date: string
    comments: PostComment[]
}

export default Post
