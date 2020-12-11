import React from "react";
import classes from "./SingleSizeButton.module.css";

const singleSizeButton = (props) => {
    return(
        <div className={classes.Single} onClick={()=>props.buttonClicked(props.value)}>
            {props.value}

        </div>
    ) 
}

export default singleSizeButton;