import classes from "./socialLink.module.css";

function SocialLink({ brand, backgroundColor, link, padding, children }) {
    return (
        <a
            className={classes.link}
            data-brand={brand}
            data-backgroundcolor={backgroundColor}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding }}
        >
            {children}
        </a>
    );
}

export default SocialLink;
