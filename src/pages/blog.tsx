import React from "react";
import Layout from "../Components/Layout/Layout"
import { EPages } from "../utils/EPages"
import Helmet from "react-helmet"
import useBlogPosts from "../hooks/useBlogPosts"
import { Container, Content, Section } from "react-bulma-components"
import BlogPostList from "../Components/Blog/BlogPostsList/BlogPostList";

export default () => {
    const posts = useBlogPosts();
    
    return (
        <Layout currentPage={EPages.Blog}>
            <Helmet>
                <title>Blog | Francesc Pellicero</title>
            </Helmet>

            <Container>
                <Section>
                    <Content>
                        <p>
                            Welcome to my personal blog!
                        </p>
                        <p>
                            Here I write about stuff that I care about, mostly about frontend technologies.
                            I also like to write tutorials, so good chance you'll find a few ones if you keep scrolling.
                        </p>

                        <hr/>

                        <BlogPostList />
                    </Content>
                </Section>
            </Container>
        </Layout>
    )
}