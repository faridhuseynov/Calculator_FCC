import React from "react";
import classes from "./Keyboard.module.css";
import SingleSizeButton from "../Buttons/SingleSizeButton/SingleSizeButton";
import DoubleSizeButton from "../Buttons/DoubleSizeButton/DoubleSizeButton";
// import DoubleSizeButton from "../Buttons/DoubleSizeButton/DoubleSizeButton";
const keyboard = () => {
    return (
        <div className={classes.Keyboard}>
            <div className={classes.Left}>
                <SingleSizeButton id="seven" value="7" />
                <SingleSizeButton id="eight" value="8" />
                <SingleSizeButton id="nine" value="9" />
                <SingleSizeButton id="four" value="4" />
                <SingleSizeButton id="five" value="5" />
                <SingleSizeButton id="six" value="6" />
                <SingleSizeButton id="one" value="1" />
                <SingleSizeButton id="two" value="2" />
                <SingleSizeButton id="three" value="3" />
                <SingleSizeButton id="zero" value="0" />
                <SingleSizeButton id="decimal" value="." />
                <SingleSizeButton id="clear" value="AC" bgdColor="" />
            </div>
            <div className={classes.Right}>
                <SingleSizeButton value="/" />
                <SingleSizeButton value="-" />
                <DoubleSizeButton value="+"/>
                <SingleSizeButton value="*" />
                <SingleSizeButton id="equals" value="=" />
            </div>

        </div>
    )
}

export default keyboard;