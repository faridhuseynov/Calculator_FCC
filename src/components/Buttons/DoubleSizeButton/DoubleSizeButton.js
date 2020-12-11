import React from "react";
import classes from "./DoubleSizeButton.module.css";

const doubleSizeButton = (props) =>{
    return(
        <div className={classes.Double} onClick={()=>props.buttonClicked(props.value)}>
            {props.value}

        </div>
    )
}

export default doubleSizeButton;