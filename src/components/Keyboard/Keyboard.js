import React from "react";
import classes from "./Keyboard.module.css";
import SingleSizeButton from "../Buttons/SingleSizeButton/SingleSizeButton";
import DoubleSizeButton from "../Buttons/DoubleSizeButton/DoubleSizeButton";
// import DoubleSizeButton from "../Buttons/DoubleSizeButton/DoubleSizeButton";
const keyboard = (props) => {
    return (
        <div className={classes.Keyboard}>
            <div className={classes.Left}>
                <SingleSizeButton buttonClicked={props.clicked} id="seven" value="7" />
                <SingleSizeButton buttonClicked={props.clicked} id="eight" value="8" />
                <SingleSizeButton buttonClicked={props.clicked} id="nine" value="9" />
                <SingleSizeButton buttonClicked={props.clicked} id="four" value="4" />
                <SingleSizeButton buttonClicked={props.clicked} id="five" value="5" />
                <SingleSizeButton buttonClicked={props.clicked} id="six" value="6" />
                <SingleSizeButton buttonClicked={props.clicked} id="one" value="1" />
                <SingleSizeButton buttonClicked={props.clicked} id="two" value="2" />
                <SingleSizeButton buttonClicked={props.clicked} id="three" value="3" />
                <SingleSizeButton buttonClicked={props.clicked} id="zero" value="0" />
                <SingleSizeButton buttonClicked={props.clicked} id="decimal" value="." />
                <SingleSizeButton buttonClicked={props.clicked} id="equals" value="=" bgdColor="" />
            </div>
            <div className={classes.Right}>
                <SingleSizeButton buttonClicked={props.clicked} id="divide" value="/" />
                <SingleSizeButton buttonClicked={props.clicked} id="subtract" value="-" />
                <SingleSizeButton buttonClicked={props.clicked} id="add" value="+" />
                <SingleSizeButton buttonClicked={props.clicked} id="multiply" value="x" />
                <DoubleSizeButton buttonClicked={props.clicked} id="clear" value="AC"/>
            </div>

        </div>
    )
}

export default keyboard;