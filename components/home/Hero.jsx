import Image from "next/image";
import classes from "./hero.module.css";

import backgroundImage from "../../public/images/background/hero.jpg";
import Bio from "./Bio";

function Hero() {
    return (
        <section className={classes.hero}>
            <Image
                src={backgroundImage}
                alt="background image"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                style={{ zIndex: -1 }}
                placeholder="blur"
            />
            <Bio />
        </section>
    );
}

export default Hero;
