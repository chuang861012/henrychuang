import { useState } from "react";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import HeadMeta from "../../components/seo/HeadMeta";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";
import PostFilter from "../../components/posts/PostFilter";
import PostList from "../../components/posts/PostList";
import { getAllPosts } from "../../lib/posts-utils";

function PostsPage({ posts, locale }) {
    const [selectedLanguage, setSelectedLanguage] = useState("all");
    const { t } = useTranslation();

    const domain = process.env.SITE_URL;
    const url = `${domain}/blog`;
    const ogImageUrl = `${domain}/images/og.jpg`;

    return (
        <Container>
            <HeadMeta
                title="Blog | Henry Chuang"
                //FIXME: meta data for blog
                description={t("meta.works")}
                domain={domain}
                url={url}
                image={ogImageUrl}
            />
            <SectionTitle title="Blog" />
            <PostFilter
                defaultValue={"all"}
                onChangeHandler={(e) => {
                    setSelectedLanguage(e.target.value);
                }}
            >
                <option value="all">{t("language.all")}</option>
                <option value="zh">{t("language.zh")}</option>
                <option value="en">{t("language.en")}</option>
            </PostFilter>
            <PostList posts={posts} locale={locale} selectedLanguage={selectedLanguage} />
        </Container>
    );
}

export async function getStaticProps({ locale }) {
    const allPosts = getAllPosts();

    return {
        props: {
            posts: allPosts,
            locale,
            ...(await serverSideTranslations(locale, ["common"])),
        },
    };
}

export default PostsPage;
