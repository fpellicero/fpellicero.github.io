import { useStaticQuery, graphql } from "gatsby";

interface IBlogPostsQueryResult {
    allMdx: {
        edges: Array<{
            node: IBlogPost
        }>
    }
}

export interface IBlogPost {
    id: string;
    timeToRead: string;
    frontmatter: {
        title: string;
        slug: string;
        date: string;
        summary: string;
    }
}

const useBlogPosts = (): IBlogPost[] => {
    const items = useStaticQuery<IBlogPostsQueryResult>(graphql`
        query BlogPosts {
            allMdx(
                filter: {frontmatter: {slug: {glob: "/blog/*"}, status: {eq: "published"}}},
                sort: {order: DESC, fields: frontmatter___date}
            ) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            slug
                            date(fromNow: true)
                            summary
                        }
                        timeToRead
                    }
                }
            }
        }
    `);

    return items.allMdx.edges.map(edge => edge.node);
}

export default useBlogPosts;
