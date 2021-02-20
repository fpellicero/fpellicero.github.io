import * as React from "react";
import { GetServerSideProps, GetStaticPaths } from "next";
import Head from "next/head";
import { Container, Section, Content } from "react-bulma-components";
import BlogPostItem from "components/Blog/BlogPostItem";
import { IBlogPost, getAllPosts } from "services/$Posts";
import { EPages } from "utils/EPages";
import { Trans } from "@lingui/macro";
import Locales from "i18n/Locales";
import { ParsedUrlQuery } from "querystring";

interface IProps {
    posts: IBlogPost[];
}

interface IParams extends ParsedUrlQuery {
    locale: string;
}

const BlogIndex = ({ posts }: IProps) => {
    return (
        <>
            <Head>
                <title>Blog | Francesc Pellicero</title>
            </Head>

            <Container>
                <Section>
                    <Content>
                        <Trans>
                            <p>Welcome to my personal blog!</p>
                            <p>
                                Here I write about stuff that I care about, mostly
                                about frontend technologies. I also like to write
                                tutorials, so good chance you'll find a few ones if
                                you keep scrolling.
                            </p>
                        </Trans>

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

BlogIndex.PAGE_TYPE = EPages.Blog;

export const getStaticProps: GetServerSideProps<IProps, IParams> = async ({ params }) => {
    const posts = await getAllPosts([params.locale]);

    return {
        props: {
            posts,
        }
    };
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    return {
        paths: Locales.map((locale) => ({ params: { locale } })),
        fallback: false,
    }
}

export default BlogIndex;
