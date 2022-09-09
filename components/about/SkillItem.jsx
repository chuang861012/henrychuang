import { ListItem, Progress } from "@chakra-ui/react";

import classes from "./skillItem.module.css";

function SkillItem({ text, value }) {
    let color;
    if (value <= 40) {
        color = "red";
    } else if (value <= 60) {
        color = "yellow";
    } else {
        color = "green";
    }

    return (
        <ListItem className={classes.item}>
            {text}
            <Progress colorScheme={color} size="sm" value={value} className={classes.progress} />
        </ListItem>
    );
}

export default SkillItem;
