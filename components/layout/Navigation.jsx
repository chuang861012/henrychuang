import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import avatarImage from "../../public/images/avatar.png";

import classes from "./navigation.module.css";
import { FaGlobe } from "react-icons/fa";

function Navigation() {
    const hamburgerRef = useRef();
    const router = useRouter();
    const { pathname, asPath, query, locale } = router;

    const handleLocaleSwitch = () => {
        if (locale === "en-US") router.push({ pathname, query }, asPath, { locale: "zh-TW" });
        else router.push({ pathname, query }, asPath, { locale: "en-US" });
    };

    return (
        <>
            <input type="checkbox" id="hamburger" className={classes.hamburger_control} ref={hamburgerRef} />
            <label htmlFor="hamburger" className={classes.hamburger_container}>
                <div className={classes.bar1}></div>
                <div className={classes.bar2}></div>
                <div className={classes.bar3}></div>
            </label>
            <header
                className={classes.header}
                onClick={() => {
                    hamburgerRef.current.checked = false;
                }}
            >
                <ul className={classes.navigation}>
                    <li className={classes.logo}>
                        <Link href="/">
                            <a>
                                <div className={classes.avatar}>
                                    <Image src={avatarImage} alt="avatar image" />
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className={classes.links}>
                        <Link href="/about" locale={locale}>
                            <a className={router.asPath === "/about" ? classes.active : undefined}>About</a>
                        </Link>
                        <Link href="/works" locale={locale}>
                            <a className={router.asPath === "/works" ? classes.active : undefined}>Works</a>
                        </Link>
                        <Link href="/blog" locale={locale}>
                            <a className={router.asPath === "/blog" ? classes.active : undefined}>Blog</a>
                        </Link>
                    </li>
                    <li className={classes.i18n}>
                        <button onClick={handleLocaleSwitch}>
                            <FaGlobe style={{ marginRight: ".5rem" }} />
                            {locale === "en-US" ? "中文" : "English"}
                        </button>
                    </li>
                </ul>
            </header>
        </>
    );
}

export default Navigation;
