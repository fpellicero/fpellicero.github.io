import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import readingTime from "reading-time";
import { format } from "timeago.js";
import renderToString from 'next-mdx-remote/render-to-string';
import MDXProviderComponent from "components/Blog/MDXProvider";
import rehypeHighlight from "@mapbox/rehype-prism";

const POSTS_FOLDER = path.resolve(process.cwd(), "src/data/Blog");

export interface IBlogPost {
    title: string;
    slug: string;
    date: string;
    dateRelative: string;
    excerpt: string;
    status: "published" | "Draft";
    readingTime: string;
}

export async function getPost(slug: string): Promise<IBlogPost> {
    const realSlug = slug.replace(/.md$/, "");
    const fileContent = await fs.readFile(path.join(POSTS_FOLDER, `${realSlug}.md`), "utf-8");
    const { data, content } = matter(fileContent);    
    
    return {
        title: data["title"],
        slug: realSlug,
        date: data["date"].toString(),
        dateRelative: format(data["date"]),
        excerpt: data["excerpt"],
        status: data["status"],
        readingTime: readingTime(content).text,
    };
}

export async function getPostAsHtml(slug: string) {
    const fileContent = await fs.readFile(path.join(POSTS_FOLDER, `${slug}.md`), "utf-8");
    const { content } = matter(fileContent);

    const result = await renderToString(
        content, 
        {
            provider: {
                component: MDXProviderComponent, 
                props: {}
            },
            mdxOptions: {
                rehypePlugins: [rehypeHighlight]
            }
        },
    );
    return result;
}

export async function getAllPosts() {
    const blogFiles = await fs.readdir(POSTS_FOLDER);
    
    return Promise.all(blogFiles.map(getPost));
}
