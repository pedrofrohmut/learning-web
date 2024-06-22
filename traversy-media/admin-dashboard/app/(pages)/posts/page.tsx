import PostsPagination from "@/components/posts/posts-pagination"
import PostsTable from "@/components/posts/posts-table"
import BackButton from "@/components/shared/back-button"

const PostsPage = () => {
    return (
        <>
            <BackButton link="/" text="Go back" />
            <PostsTable />
            <PostsPagination />
        </>
    )
}

export default PostsPage
