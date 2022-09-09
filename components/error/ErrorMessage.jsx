import classes from "./errorMessage.module.css";

function ErrorMessage({ code, message }) {
    return (
        <article className={classes.error}>
            <section>
                <h1>{code}</h1>
                <h2>{message}</h2>
            </section>
        </article>
    );
}

export default ErrorMessage;
