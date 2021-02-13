import { GetStaticPaths, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";
import * as React from "react";
import { getAllPosts, getPost, getPostAsHtml, IBlogPost } from "services/$Posts";
import hydrate from 'next-mdx-remote/hydrate';
import { MdxRemote } from "next-mdx-remote/types";
import MDXProviderComponent from "components/Blog/MDXProvider";
import { Content, Section } from "react-bulma-components";
import Head from "next/head";

interface IProps {
    post: IBlogPost;
    source: MdxRemote.Source;
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

const BlogPostPage: React.FC<IProps> = ({source, post}) => {
    return (
        <>
            <Head>
                <title>{post.title} | Francesc Pellicero</title>
                <link href="https://unpkg.com/prismjs@1.23.0/themes/prism-okaidia.css" rel="stylesheet" />
            </Head>
            <MDXProviderComponent>
                <Section>
                    <Content>
                        {hydrate(source)}
                    </Content>
                </Section>
            </MDXProviderComponent>
            {/* <script src="https://unpkg.com/prismjs@1.23.0/components/prism-core.min.js"></script> */}
            {/* <script src="https://unpkg.com/prismjs@1.23.0/plugins/autoloader/prism-autoloader.min.js"></script> */}
        </>
    );
}

export const getStaticProps: GetStaticProps<IProps, IParams> = async ({ params }) => {
    const post = await getPost(params.slug);
    const content = await getPostAsHtml(params.slug);

    return {
        props: {
            post,
            source: content,
        }
    }
}

export const getStaticPaths: GetStaticPaths<IParams> = async () => {
    const posts = await getAllPosts();

    return {
        paths: posts.map(({slug}) => ({
            params: {
                slug,
            },
        })),
        fallback: false,
    }

}

export default BlogPostPage;