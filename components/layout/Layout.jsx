import { Fragment } from "react";
import { AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Navigation from "./Navigation";

function Layout(props) {
    return (
        <Fragment>
            <Navigation />
            <AnimatePresence exitBeforeEnter>
                <main style={{minHeight:'100vh'}}>{props.children}</main>
            </AnimatePresence>
            <Footer />
        </Fragment>
    );
}

export default Layout;
