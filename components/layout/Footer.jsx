import Link from "next/link";
import SocialLinks from "../ui/SocialLinks";

import classes from "./footer.module.css";

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className={classes.copyright}>
                Copyright ©
                <a href="https://twitter.com/Infinitychuang" target="_blank" rel="noopener noreferrer">
                    Henry Chuang
                </a>
                . All rights reserved.
            </div>
            <SocialLinks fontSize="2rem" marginBetween=".5rem" />
            <Link href="/privacy-policy">
                <a
                    style={{
                        borderBottom: "1px solid var(--color-primary-100)",
                        color: "var(--color-primary-100)",
                    }}
                >
                    隱私權政策 (Privacy Policy)
                </a>
            </Link>
            <div className={classes.attribute}>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/ITIhejPZQD5g/web-scraper">
                    Web Scraper,
                </a>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/85398/application-window">
                    Application Window,
                </a>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/OB2yW6RfiVkb/website">
                    website,
                </a>
                <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/qdciofMLuQr0/chatbot">
                    Chatbot
                </a>
                icon by
                <a target="_blank" rel="noreferrer" href="https://icons8.com">
                    Icons8
                </a>
            </div>
            <div className={classes.attribute}>
                <a target="_blank" rel="noreferrer" href="https://fontawesome.com/v5/icons/globe">
                    globe
                </a>
                icon by
                <a target="_blank" rel="noreferrer" href="https://fontawesome.com/">
                    fontawesome
                </a>
                -
                <a target="_blank" rel="noreferrer" href="https://creativecommons.org/licenses/by/4.0/">
                    CC BY 4.0 License
                </a>
            </div>
            <p style={{ fontWeight: 100 }}>
                The relevant licenses for third party packages used to build this website can be found{" "}
                <Link href="/thirdpartylicenses.txt" locale="en-US">
                    <a
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            borderBottom: "1px solid var(--color-primary-100)",
                            color: "var(--color-primary-100)",
                        }}
                    >
                        here
                    </a>
                </Link>
            </p>
        </footer>
    );
}

export default Footer;
