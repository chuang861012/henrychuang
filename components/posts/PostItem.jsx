import Link from "next/link";
import { useTranslation } from "react-i18next";

import classes from "./postItem.module.css";

function PostItem({ title, slug, date, excerpt, language }) {
    const { t } = useTranslation();

    return (
        <div className={classes.postItem}>
            <Link href={`/blog/${slug}`}>
                <a>
                    <h3>{title}</h3>
                </a>
            </Link>
            <div className={classes.detail}>
                <p>
                    {date} &middot; {t(`language.${language}`)}
                </p>
            </div>
            <p>{excerpt}</p>
        </div>
    );
}

export default PostItem;
