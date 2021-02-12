import * as React from "react";
import { GetServerSideProps } from "next";
import getAllPosts, { IBlogPost } from "utils/getAllPosts";
import Head from "next/head";
import { Container, Section, Content } from "react-bulma-components";
import BlogPostItem from "components/Blog/BlogPostItem";

interface IProps {
    posts: IBlogPost[];
}

const BlogIndex: React.FC<IProps> = ({posts}) => {
    return (
        <>
            <Head>
                    <title>Blog | Francesc Pellicero</title>
            </Head>

            <Container>
                <Section>
                    <Content>
                        <p>Welcome to my personal blog!</p>
                        <p>
                            Here I write about stuff that I care about, mostly
                            about frontend technologies. I also like to write
                            tutorials, so good chance you'll find a few ones if
                            you keep scrolling.
                        </p>

                        <hr />

                        <main>
                            {posts.map((post) => (
                                <BlogPostItem key={post.slug} {...post} />
                            ))}
                        </main>
                    </Content>
                </Section>
            </Container>
        </>
    )
}

export const getStaticProps: GetServerSideProps<IProps> = async () => {
    const posts = await getAllPosts();

    return {
        props: {
            posts,
        }
    };
} 

export default BlogIndex;
