import classes from "./workList.module.css";
import WorkItem from "./WorkItem";

function WorkList({ works }) {
    return (
        <ul className={classes.works}>
            {works.map((work) => (
                <li key={work.slug}>
                    <WorkItem
                        title={work.title}
                        slug={work.slug}
                        icon={work.icon}
                        excerpt={work.excerpt}
                        tags={work.tags}
                    />
                </li>
            ))}
        </ul>
    );
}

export default WorkList;
