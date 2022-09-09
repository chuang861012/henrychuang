import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import classes from "./container.module.css";
import Loader from "./Loader";
import BackGroundImageWrapper from "./BackgroundImageWrapper";

function Container({ children, backgroundImage }) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const handleRouterChangeStart = (url) => {
            if (router.locale === "zh-TW") return setIsLoading(true);
            return url !== router.asPath && setIsLoading(true);
        };
        const handleRouterChangeEnd = () => {
            return setIsLoading(false);
        };

        router.events.on("routeChangeStart", handleRouterChangeStart);
        router.events.on("routeChangeComplete", handleRouterChangeEnd);
        router.events.on("routerChangeError", handleRouterChangeEnd);

        return () => {
            router.events.off("routeChangeStart", handleRouterChangeStart);
            router.events.off("routeChangeComplete", handleRouterChangeEnd);
            router.events.off("routerChangeError", handleRouterChangeEnd);
        };
    }, [router]);

    const variants = {
        hidden: { opacity: 0, x: -100, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
    };

    if (isLoading) return <Loader />;

    return !backgroundImage ? (
        <motion.div
            initial="hidden"
            animate="enter"
            exit="exit"
            variants={variants}
            transition={{ type: "linear" }}
            className={classes.container}
        >
            {children}
        </motion.div>
    ) : (
        <BackGroundImageWrapper image={backgroundImage}>
            <motion.div
                initial="hidden"
                animate="enter"
                exit="exit"
                variants={variants}
                transition={{ type: "linear" }}
                className={classes.container}
            >
                {children}
            </motion.div>
        </BackGroundImageWrapper>
    );
}

export default Container;
