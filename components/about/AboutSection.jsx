import classes from "./aboutSection.module.css";

function AboutSection({ welcome,description }) {
    return (
        <section className={classes.section}>
            <p>
                {description}
            </p>
            <p>{welcome}</p>
        </section>
    );
}

export default AboutSection;
