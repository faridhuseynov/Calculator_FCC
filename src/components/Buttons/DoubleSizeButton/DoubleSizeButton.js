import React from "react";
import classes from "./DoubleSizeButton.module.css";

const doubleSizeButton = (props) =>{
    return(
        <div className={classes.Double}>
            {props.value}

        </div>
    )
}

export default doubleSizeButton;