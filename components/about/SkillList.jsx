import { List } from "@chakra-ui/react";
import SkillItem from "./SkillItem";

import classes from "./skillList.module.css";

function SkillsList({ skills, title }) {
    return (
        <div className={classes.wrapper}>
            <h3 className={classes.title}>{title}</h3>
            <List spacing={3} className={classes.skillList}>
                {skills.map(([text, value]) => (
                    <SkillItem key={text} text={text} value={value} />
                ))}
            </List>
        </div>
    );
}

export default SkillsList;
