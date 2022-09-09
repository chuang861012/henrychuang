import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const worksDir = path.join(process.cwd(), 'works');
const worksImageDir = path.join(process.cwd(), 'public', 'images', 'works');

export function getWorkSlugs() {
    return fs.readdirSync(worksDir);
}

function getWorkImageFiles(slug) {
    const imagesDirPath = path.join(worksImageDir, slug);
    return fs.readdirSync(imagesDirPath);
}

export function getWorkData(slug, locale) {
    const filePath = path.join(worksDir, slug, `${locale}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const thumbnail = getWorkImageFiles(slug).find(file => (file === 'thumbnail.png' || file === 'thumbnail.jpg'));
    const icon = getWorkImageFiles(slug).find(file => (file === 'icon.png' || file === 'icon.jpg'));

    const workData = {
        slug,
        ...data,
        content,
        thumbnail,
        icon
    };
    return workData;
}

export function getAllWorks(locale) {
    const workSlugs = getWorkSlugs();

    const allWorks = workSlugs.map(slug => getWorkData(slug, locale));

    return allWorks;
}
