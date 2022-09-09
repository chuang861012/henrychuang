import SkillsList from "./SkillList";

import classes from "./skillsSection.module.css";

function SkillsSection() {
    const frontend = [
        ["HTML", 90],
        ["CSS", 90],
        ["SCSS", 90],
        ["JavaScript", 90],
        ["TypeScript", 70],
        ["ES6", 80],
        ["React.js", 80],
        ["Next.js", 80],
        ["Gatsby.js", 70],
        ["Redux", 50],
        ["Jest(testing)", 60],
        ["Chakra UI", 80],
        ["Material UI", 60],
        ["Electron", 60],
    ];

    const backend = [
        ["Node.js", 90],
        ["Python", 80],
        ["Flask", 60],
        ["Express.js", 70],
        ["MySQL", 70],
        ["SQL Server", 60],
        ["MongoDB", 80],
        ["RESTful API", 70],
        ["CI/CD", 70],
        ["GraphQL", 60],
        ["AWS", 60],
        ["GCP", 60],
    ];

    const data = [
        ["Python", 80],
        ["NumPy", 70],
        ["Pandas", 70],
        ["matplotlib", 60],
        ["scikit-learn", 70],
        ["Keras", 70],
        ["Word2vec", 80],
        ["Doc2vec", 80],
        ["BERT", 60],
    ];

    const others = [
        ["AHP", 70],
        ["Git", 80],
        ["Docker", 60],
        ["web scraping", 90],
        ["puppeteer", 80],
        ["selenium", 70],
        ["OOP", 80],
        ["Ruby", 40],
        ["Java", 50],
        ["C++", 30],
    ];

    return (
        <section className={classes.section}>
            <SkillsList skills={frontend} title="Frontend"/>
            <SkillsList skills={backend} title="Backend"/>
            <SkillsList skills={data} title="Data Science"/>
            <SkillsList skills={others} title="Others"/>
        </section>
    );
}

export default SkillsSection;
