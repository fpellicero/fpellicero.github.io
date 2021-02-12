import path from "path";
import fs from "fs/promises";
import matter from "gray-matter";
import readingTime from "reading-time";
import { format } from "timeago.js";

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

async function getPost(name: string): Promise<IBlogPost> {
    const fileContent = await fs.readFile(path.join(POSTS_FOLDER, name), "utf-8");
    const { data, content } = matter(fileContent);    
    
    return {
        title: data["title"],
        slug: data["slug"],
        date: data["date"].toString(),
        dateRelative: format(data["date"]),
        excerpt: data["excerpt"],
        status: data["status"],
        readingTime: readingTime(content).text,
    };
}

async function getAllPosts() {
    const blogFiles = await fs.readdir(POSTS_FOLDER);
    
    return Promise.all(blogFiles.map(getPost));
}

export default getAllPosts;
