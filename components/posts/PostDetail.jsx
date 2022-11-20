import { useTranslation } from "next-i18next";

import PostHeader from "./PostHeader";
import MarkdownRenderer from "../ui/MarkdownRenderer";

import classes from "./postDetail.module.css";

const getDateString = (date, locale) => {
    return new Date(date).toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

function PostDetail({ post, locale }) {
    const { t } = useTranslation();

    return (
        <article className={classes.content}>
            <PostHeader
                title={post.title}
                date={getDateString(post.date, locale)}
                language={t(`language.${post.language}`)}
                locale={locale}
            />
            <section>
                <MarkdownRenderer data={post} imageDir={`/images/posts`} showTitleDivider={false} />
            </section>
        </article>
    );
}

export default PostDetail;
