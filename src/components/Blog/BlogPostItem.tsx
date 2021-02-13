import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faClock } from "@fortawesome/free-solid-svg-icons";
import { IBlogPost } from "services/$Posts";

const BlogPostItem = (post: IBlogPost) => {
    const {
        dateRelative,
        excerpt,
        slug,
        title,
        readingTime
    } = post
    return (
        <article style={{ marginBottom: "3em" }}>
            <header>
                <h3>
                    <Link href={`/blog/${slug}`}>{title}</Link>
                </h3>
                <small style={{ position: "relative", top: "-1em" }}>
                    <span>
                        <FontAwesomeIcon icon={faCalendar} width="1rem"/> {dateRelative}
                    </span>
                    <span style={{ marginLeft: "1em" }}>
                        <FontAwesomeIcon icon={faClock} width="1rem"/> {readingTime}
                    </span>
                </small>
            </header>
            <p>{excerpt}</p>
        </article>
    )
}

export default BlogPostItem
