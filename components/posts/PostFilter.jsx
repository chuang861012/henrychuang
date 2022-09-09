import classes from "./postFilter.module.css";

function PostFilter({ defaultValue, onChangeHandler, children }) {
    return (
        <div className={classes.container}>
            <select
                defaultValue={defaultValue}
                onChange={onChangeHandler}
                className={classes.filter}
            >
                {children}
            </select>
        </div>
    );
}

export default PostFilter;
