import type { JSX } from 'react/jsx-runtime';
import classes from './MyInput.module.css'
import * as React from "react";


const MyInput = (props: JSX.IntrinsicAttributes & React.ClassAttributes<HTMLInputElement> & React.InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input className={classes.myInput} {...props}/>
    );
};

export default MyInput;