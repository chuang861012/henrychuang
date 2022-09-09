import { Divider } from "@chakra-ui/react";

import classes from "./postHeader.module.css";

function PostHeader({ title, date, language }) {
    return (
        <section className={classes.header}>
            <h1>{title}</h1>
            <p>
                {date} &middot; {language}
            </p>
            <Divider borderColor="var(--color-grey-100)" variant="dashed" />
        </section>
    );
}

export default PostHeader;
