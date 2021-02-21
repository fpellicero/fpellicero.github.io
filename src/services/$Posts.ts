import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import readingTime from "reading-time";
import renderToString from 'next-mdx-remote/render-to-string';
import MDXProviderComponent from "components/Blog/MDXProvider";
import rehypeHighlight from "@mapbox/rehype-prism";
import moment from "moment";
import "moment/locale/es";

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

function formatReadingTime(minutes: number, locale: string) {
    if (locale === "es") {
        return `${Math.ceil(minutes)} minutos`
    }

    return `${Math.ceil(minutes)} minutes`;
}

export async function getPost(slug: string, locale: string): Promise<IBlogPost> {
    const realSlug = slug.replace(/.md$/, "");
    const fileContent = await fs.readFile(path.join(POSTS_FOLDER, `${realSlug}.${locale}.md`), "utf-8");
    const { data, content } = matter(fileContent);    


    
    return {
        title: data["title"],
        slug: realSlug,
        date: data["date"].toString(),
        dateRelative: moment(data["date"]).format("D/MM/YYYY"),
        excerpt: data["excerpt"],
        status: data["status"],
        readingTime: formatReadingTime(readingTime(content).minutes, locale),
    };
}

export async function getPostAsHtml(slug: string, locale: string) {
    const fileContent = await fs.readFile(path.join(POSTS_FOLDER, `${slug}.${locale}.md`), "utf-8");
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

export async function getAllPosts(locales: string[]) {
    const blogFiles = await fs.readdir(POSTS_FOLDER);

    const slugs = [...new Set(blogFiles.map((fileName) => fileName.split(".")[0]))];
    
    let posts: Array<IBlogPost & {locale: string}> = [];
    for (const slug of slugs) {
        for (const locale of locales) {
            const post = await getPost(slug, locale);
            posts.push({...post, locale});
        }
    }

    return posts;
}
