import Image from "next/image";

import classes from "./backGroundImageWrapper.module.css";

function BackGroundImageWrapper({ children, image }) {
    return (
        <div className={classes.wrapper}>
            {children}
            <Image
                src={image}
                alt="background image"
                objectFit="cover"
                objectPosition="center"
                layout="fill"
                style={{ zIndex: -1 }}
                placeholder="blur"
                priority={true}
            />
        </div>
    );
}

export default BackGroundImageWrapper;
