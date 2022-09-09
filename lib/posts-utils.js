import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDir = path.join(process.cwd(), 'posts');
const postsImageDir = path.join(process.cwd(), 'public', 'images', 'posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDir).map(filename => filename.replace(/\.md$/, ''));
}

function getPostImageFiles(slug) {
    const imagesDirPath = path.join(postsImageDir, slug);
    return fs.readdirSync(imagesDirPath);
}

export function getPostData(slug) {
    const filePath = path.join(postsDir, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    // const thumbnail = getPostImageFiles(slug).find(file => (file === 'thumbnail.png' || file === 'thumbnail.jpg'));

    const postData = {
        slug,
        ...data,
        content
    };
    return postData;
}

export function getAllPosts() {
    const postSlugs = getPostSlugs();

    const allPosts = postSlugs.map(slug => getPostData(slug));

    return allPosts;
}