import { CircularProgress } from "@chakra-ui/react";

import classes from "./loader.module.css";

function Loader() {
    return (
        <div style={{ position: "relative", minHeight: "100vh" }}>
            <div className={classes.loader}>
                <h5>Loading</h5>
                <CircularProgress isIndeterminate color="var(--color-primary-300)" />
            </div>
        </div>
    );
}

export default Loader;
