import MarkdownRenderer from "../ui/MarkdownRenderer";

import classes from "./workDetail.module.css";

import WorkHeader from "./WorkHeader";

function WorkDetail({ work }) {
    return (
        <article className={classes.content}>
            <WorkHeader work={work} />
            <section>
                <MarkdownRenderer data={work} imageDir={`/images/works`} showTitleDivider={true} />
            </section>
        </article>
    );
}

export default WorkDetail;
