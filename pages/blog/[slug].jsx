import PostDetail from "../../components/posts/PostDetail";
import HeadMeta from "../../components/seo/HeadMeta";
import Container from "../../components/ui/Container";
import { getPostData, getPostSlugs } from "../../lib/posts-utils.js";

function PostDetailPage({ post, locale }) {
    const domain = process.env.SITE_URL;
    const url = `${domain}/blog/${post.slug}`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <Container>
            <HeadMeta
                title={`${post.title} | Henry Chuang`}
                description={post.excerpt}
                domain={domain}
                url={url}
                image={ogImageUrl}
            />
            <PostDetail post={post} locale={locale} />
        </Container>
    );
}

export function getStaticProps({ params, locale }) {
    const { slug } = params;

    const postData = getPostData(slug);

    return {
        props: {
            post: postData,
            locale,
        },
        revalidate: 600,
    };
}

export function getStaticPaths() {
    const postSlugs = getPostSlugs();

    return {
        paths: postSlugs.flatMap((slug) => [{ params: { slug }, locale: "en-US" }, { params: { slug } }]),
        fallback: false,
    };
}

export default PostDetailPage;
