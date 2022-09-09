import classes from "./postList.module.css";
import PostItem from "./PostItem";

const getDateString = (date, locale) => {
    return new Date(date).toLocaleDateString(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
    });
};

function PostList({ posts, locale, selectedLanguage }) {
    return (
        <ul className={classes.posts}>
            {posts.map((post) => {
                if (selectedLanguage !== "all" && selectedLanguage !== post.language) return null;
                return (
                    <li key={post.slug}>
                        <PostItem
                            title={post.title}
                            slug={post.slug}
                            date={getDateString(post.date, locale)}
                            excerpt={post.excerpt}
                            language={post.language}
                        />
                    </li>
                );
            })}
        </ul>
    );
}

export default PostList;
