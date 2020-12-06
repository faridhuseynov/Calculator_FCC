import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "../components/Display/Display";
import Keyboard from "../components/Keyboard/Keyboard";
class Calculator extends Component{
    state={
        operations:"",
        lastPushed:0
    }

    render(){
        return(
            <div className={classes.Calculator}>
                <Display id="display" last={this.state.lastPushed}/>
                <Keyboard />
            </div>
        )
    }
}

export default Calculator;