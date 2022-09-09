import Image from "next/image";
import { Tag, Divider } from "@chakra-ui/react";

import classes from "./workHeader.module.css";

function WorkHeader({ work }) {
    const { slug, thumbnail, title, tags } = work;

    return (
        <section className={classes.header}>
            <h1>
                <span className={classes.title}>{title}</span>
                <span>
                    {tags.map((tag) => (
                        <Tag key={tag} fontSize="1.3rem" marginRight="1rem">
                            {tag}
                        </Tag>
                    ))}
                </span>
                <Divider borderColor="var(--color-grey-100)" />
            </h1>
            <div className={classes.thumbnail}>
                <Image
                    src={`/images/works/${slug}/${thumbnail}`}
                    alt="thumbnail"
                    title={title}
                    width={700}
                    height={400}
                    layout="responsive"
                    objectFit="contain"
                    objectPosition="center"
                />
            </div>
        </section>
    );
}

export default WorkHeader;
