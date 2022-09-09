import { SiGithub, SiTwitter, SiLinkedin, SiMedium } from "react-icons/si";
import SocialLink from "./SocialLink";

import classes from "./socialLinks.module.css";

function SocialLinks({ fontSize, marginBetween, backgroundColor, padding, flexDirection }) {
    return (
        <ul className={classes.links} style={{ fontSize: fontSize, flexDirection: flexDirection }}>
            <li style={{ marginRight: marginBetween }}>
                <SocialLink
                    brand="github"
                    backgroundColor={backgroundColor}
                    link="https://github.com/chuang861012"
                    padding={padding}
                >
                    <SiGithub />
                </SocialLink>
            </li>
            <li style={{ marginRight: marginBetween }}>
                <SocialLink
                    brand="twitter"
                    backgroundColor={backgroundColor}
                    link="https://twitter.com/Infinitychuang"
                    padding={padding}
                >
                    <SiTwitter />
                </SocialLink>
            </li>
            <li style={{ marginRight: marginBetween }}>
                <SocialLink
                    brand="linkedin"
                    backgroundColor={backgroundColor}
                    link="https://www.linkedin.com/in/ying-yu-chuang-903ba6210/"
                    padding={padding}
                >
                    <SiLinkedin />
                </SocialLink>
            </li>
            <li>
                <SocialLink
                    brand="medium"
                    backgroundColor={backgroundColor}
                    link="https://medium.com/@henrychuang11"
                    padding={padding}
                >
                    <SiMedium />
                </SocialLink>
            </li>
        </ul>
    );
}

export default SocialLinks;
