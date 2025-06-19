import classes from './MyButton.module.css';
import * as React from "react";

type myButton = React.ButtonHTMLAttributes<HTMLButtonElement>

const MyButton = (props: myButton) => {
    return (
        <button type={"button"} {...props} className={classes.MyBtn}>
            {props.children}
        </button>
    );
};

export default MyButton;