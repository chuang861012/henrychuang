import Link from "next/link";
import Image from "next/image";

import classes from "./workItem.module.css";

import { Tag } from "@chakra-ui/react";

function WorkItem({ title, slug, icon, excerpt, tags }) {
    return (
        <Link href={`/works/${slug}`}>
            <a className={classes.workItem}>
                <div className={classes.image}>
                    <Image
                        src={`/images/works/${slug}/${icon}`}
                        alt={title}
                        width={60}
                        height={60}
                        layout="responsive"
                    />
                </div>
                <div className={classes.detail}>
                    <h3>{title}</h3>
                    <p>{excerpt}</p>
                    <div className={classes.tagGroup}>
                        {tags.map((tag) => (
                            <Tag key={tag} fontSize="1.3rem" marginRight="1rem">
                                {tag}
                            </Tag>
                        ))}
                    </div>
                </div>
            </a>
        </Link>
    );
}

export default WorkItem;
