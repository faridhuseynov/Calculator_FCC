import React from "react";
import classes from "./Display.module.css";

const display = (props) => {
    return(
        <div className={classes.Display}>
            <p className={classes.FullList}>
                {props.ops}
        </p>
            <p>
                {props.last}
        </p>
        </div>
    )
}

export default display;