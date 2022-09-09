import { Fragment } from "react";
import classes from "./sectionTitle.module.css";

function SectionTitle({ title, marginTop }) {
    return (
        <Fragment>
            <h1 className={classes.section_title} style={{ marginTop: marginTop ? marginTop : 0 }}>
                {title}
            </h1>
            <hr className={classes.separator} />
        </Fragment>
    );
}

export default SectionTitle;
