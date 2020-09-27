import React from "react"
import { IBlogPost } from "../../../hooks/useBlogPosts"
import { Link } from "gatsby"

const BlogPostItem = (post: IBlogPost) => {
    const {
        id,
        timeToRead,
        frontmatter: { title, slug, date, summary },
    } = post
    return (
        <article style={{ marginBottom: "3em" }}>
            <header>
                <h3>
                    <Link to={slug}>{title}</Link>
                </h3>
                <small style={{ position: "relative", top: "-1em" }}>
                    <span>
                        <i className="far fa-calendar" /> {date}
                    </span>
                    <span style={{ marginLeft: "1em" }}>
                        <i className="fas fa-clock" /> {timeToRead} min read
                    </span>
                </small>
            </header>
            <p>{summary}</p>
        </article>
    )
}

export default BlogPostItem
