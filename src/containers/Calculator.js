import React, { Component } from "react";
import classes from "./Calculator.module.css";
import Display from "../components/Display/Display";
import Keyboard from "../components/Keyboard/Keyboard";

class Calculator extends Component {
    state = {
        operations: "",
        lastPushed: "0",
        decimalClicked: false,
        calculationFinished:false
    }

    inputCheck = (input) => {
        let last = 0;
        let ops="";        

        if (input === "AC") {
            this.setState({
                lastPushed: last,
                operations: ops,
                decimalClicked: false,
            });
        }

        else if (input >= 0) {
            if (this.state.decimalClicked) {
                last=this.state.lastPushed.concat(input);
                ops=this.state.operations.concat(input);
                this.setState({
                    lastPushed: last,
                    operations: ops
                })
            }
            else {
                last = 0;
                if (this.state.lastPushed >= 0) {
                    last = Number(this.state.lastPushed);
                }
                last = Number(last * 10) + Number(input);
                ops=this.state.operations.concat(input);
                this.setState({
                    lastPushed: last,
                    operations: ops
                })
            }
        }
        
        else if (input === '.') {
            if (!this.state.decimalClicked) {
                if (this.state.lastPushed >= 0){
                    last=this.state.lastPushed + ".";
                    ops=this.state.operations.concat(".");
                        this.setState({
                            lastPushed: last,
                            operations: ops
                        })
                }
                else {
                    ops=this.state.operations.concat("0.");
                    this.setState({
                        lastPushed: "0.",
                        operations: ops
                    });
                }
                this.setState({
                    decimalClicked: true
                })
            }
        }

        else {
            if (this.state.lastPushed === "." || this.state.lastPushed >= 0 && input!=="=") {
                ops = this.state.operations.concat(input);
                this.setState({
                    lastPushed: input,
                    operations: ops
                })
            }
            else if (input === "-") {
                ops = this.state.operations;
                if (this.state.lastPushed === "-") {
                    if (ops[ops.length - 2] === '.' || (ops[ops.length - 2] >= 0)) {
                        ops = ops.concat(input);
                        this.setState({
                            lastPushed: input,
                            operations: ops
                        })
                    }
                } 
                
                else {
                    ops = this.state.operations.concat(input);
                    this.setState({
                        lastPushed: input,
                        operations: ops
                    })
                }
            }
            
            else if (input === '+' || input === 'x' || input === '/' || input==="=") {
                if (!(this.state.lastPushed >= 0) && input!=="=") {
                    ops = this.state.operations.slice(0, -1);
                    let check = ops[ops.length - 1];
                    if (check !== '.' && !(check >= 0)) {
                        ops = ops.slice(0, -1);
                    }
                    ops = ops.concat(input);
                    this.setState({
                        lastPushed: input,
                        operations: ops
                    })
                }
                else {
                    ops = this.state.operations;
                    let result = this.calculateOperation();
                    if(!(ops[ops.length-1]>=0)){
                        ops=ops.slice(0,-1);
                    }
                    ops=ops.concat("="+result);
                    this.setState({
                        operations: ops,
                        lastPushed:result,
                        calculationFinished:true,
                        decimalClicked:false
                    })
                }
            }
            this.setState({
                decimalClicked: false
            })
        }
    }

    clickHandler = (event) => {
        this.inputCheck(event);
    }
    
    calculateOperation(){
        let ops = this.state.operations;
        let result=0;
        ops = ops.replace('--','+').replace('x','*');
        if(!(ops[ops.length-1]>=0)){
            ops=ops.slice(0,-1);
        }
        result=Number(eval(ops).toFixed(4));
        if(result - Math.floor(result)===0){
            result=result.toFixed(0);
        }
        return result;
    }

    render() {
        return (
            <div className={classes.Calculator}>
                <Display id="display" last={this.state.lastPushed} ops={this.state.operations} />
                <Keyboard clicked={this.clickHandler} />
            </div>
        )
    }
}

export default Calculator;