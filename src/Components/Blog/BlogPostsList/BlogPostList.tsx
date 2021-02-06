import React from "react"
import useBlogPosts from "../../../hooks/useBlogPosts"
import BlogPostItem from "./BlogPostItem"

interface IProps {
    lang: string;
}

const BlogPostList = ({ lang }: IProps) => {
    const posts = useBlogPosts()

    return (
        <main>
            {posts.map(post => (
                <BlogPostItem key={post.id} {...post} />
            ))}
        </main>
    )
}

export default BlogPostList
