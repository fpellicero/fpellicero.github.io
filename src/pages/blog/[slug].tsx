import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";
import { getAllPosts, getPost, getPostAsHtml, IBlogPost } from "services/$Posts";
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from "next-mdx-remote/types";
import MDXProviderComponent from "components/Blog/MDXProvider";
import { Content, Section } from "react-bulma-components";
import Head from "next/head";
import { EPages } from "utils/EPages";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trans } from "@lingui/macro";

interface IProps {
    post: IBlogPost;
    source: MdxRemote.Source;
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const BlogPostPage = ({source, post}: IProps) => {
    return (
        <>
            <Head>
                <title>{post.title} | Francesc Pellicero</title>
            </Head>
            <MDXProviderComponent>
                <Section>
                    <Content>
                        <h1>{post.title}</h1>
                        {hydrate(source)}
                    </Content>
                    <div style={{textAlign: "center"}}>
                        <Link href="/blog">
                            <Trans>
                                Back to Index
                            </Trans>
                        </Link>
                    </div>
                </Section>
                <link href="https://unpkg.com/prismjs@1.23.0/themes/prism-okaidia.css" rel="stylesheet" />
            </MDXProviderComponent>
        </>
    );
}

BlogPostPage.PAGE_TYPE = EPages.Blog;

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({ params, locale }) => {
    const post = await getPost(params.slug, locale);
    const content = await getPostAsHtml(params.slug, locale);

    return {
        props: {
            post,
            source: content,
        }
    }
}

export const getStaticPaths: GetStaticPaths<IParams> = async ({ locales }) => {
    const posts = await getAllPosts(locales);

    return {
        paths: posts.map(({slug, locale}) => ({
            locale,
            params: {
                slug,
            },
        })),
        fallback: false,
    }

}

export default BlogPostPage;