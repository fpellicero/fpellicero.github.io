import React from "react"
import Layout from "../Layout/Layout"
import { EPages } from "../../utils/EPages"
import { Content, Container, Section } from "react-bulma-components"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import { IBlogPost } from "../../hooks/useBlogPosts"

interface IProps {
    pageContext: {
        frontmatter: IBlogPost["frontmatter"]
    }
    children: React.ReactNode
}

const BlogDefaultLayout = (props: IProps) => {
    const { children } = props
    return (
        <>
            <Helmet>
                <title>
                    {props.pageContext.frontmatter.title} | Francesc Pellicero
                </title>
            </Helmet>
            <Container>
                <Section>
                    <Content>{children}</Content>
                    <center>
                        <Link to="/blog">Back to Index</Link>
                    </center>
                </Section>
            </Container>
        </>
    )
}

export default BlogDefaultLayout
