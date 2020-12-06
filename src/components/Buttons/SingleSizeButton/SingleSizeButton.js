import React from "react";
import classes from "./SingleSizeButton.module.css";

const singleSizeButton = (props) => {
    return(
        <div className={classes.Single}>
            {props.value}

        </div>
    ) 
}

export default singleSizeButton;