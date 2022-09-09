import Image from "next/image";
import { useMediaQuery } from "@chakra-ui/react";

import avatarImage from "../../public/images/avatar.png";
import SocialLinks from "../ui/SocialLinks";

import classes from "./bio.module.css";

function Bio() {
    const [isSmallerThan600] = useMediaQuery("(max-width: 600px)");

    return (
        <section className={classes.bio}>
            <h1>HENRY CHUANG</h1>
            <div className={classes.content}>
                <div className={classes.avatar}>
                    <Image src={avatarImage} width={180} height={180} alt="avatar image" />
                </div>
                <h2>Programming / Design / Law</h2>
                <p>Hello! I&apos;m Henry, a web developer from Taipei, Taiwan. Welcome to my website!</p>
            </div>
            <SocialLinks
                fontSize="4.5rem"
                marginBetween={isSmallerThan600 ? "0" : "2rem"}
                backgroundColor="var(--color-white)"
                padding="1rem 1.5rem"
                flexDirection={isSmallerThan600 ? "column" : "row"}
            />
        </section>
    );
}

export default Bio;
