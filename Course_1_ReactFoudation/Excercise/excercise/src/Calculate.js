import React, { Component } from "react";
import './App.css';

export default class Calculate extends Component {

  operation = ["+", "-", "*", "/"];
  result = 0;

  state = {
    previousValue: "",
    currentValue: "0",
    operation: ""
  }

  // Get number
  getDigit = (event)=>{
    let digit = event.target.innerHTML;
    let currentValueTemp;

    // Check number is validate
    if (digit === "0" && this.state.currentValue === "0") return this.setState({...this.state});
    if (digit === "." && (this.state.currentValue.includes(".") || this.state.currentValue === "")) return this.setState({...this.state});
    currentValueTemp = this.state.currentValue + digit;
    if (isNaN(currentValueTemp)) currentValueTemp = digit;
    if (parseFloat(currentValueTemp) >= 1 && currentValueTemp[0] === "0") return this.setState({currentValue: currentValueTemp.slice(1)});
    if (this.state.currentValue.includes(".") && currentValueTemp[currentValueTemp.length-1] === "0" && currentValueTemp[currentValueTemp.length-2] === "0") return this.setState({currentValue: currentValueTemp.slice(0,-1)});

    this.setState({
      currentValue: currentValueTemp
    })
  }

  // Get operation
  getOperation = (event)=>{
    // Set variable to store value
    let onGoingOperate = this.state.operation;
    let requestOperate = event.target.innerHTML;

    // Operation for button "C"
    if (requestOperate === "C") return this.setState({previousValue: "", currentValue: "", operation: ""});
    
    // Assign value to previous value when previous value is " "
    if (this.state.previousValue === ""){
      if (requestOperate === "=") return this.setState({operation: ""})
      // Operation for button "CE" when previous value is " "
      else if (requestOperate === "CE") return this.setState({currentValue: "", operation: ""})
      return (this.setState({
        previousValue: this.state.currentValue,
        currentValue: "", 
        operation: requestOperate
      })
      )
    }
    // Operation for button "CE" when previous value is not ""
    if (requestOperate === "CE") return this.setState({currentValue: "", operation: onGoingOperate});

    // Get result
    this.result = this.evaluate(this.state.previousValue, this.state.currentValue, onGoingOperate);
    // Check result is valid
    if (isNaN(parseFloat(this.result))){
      return this.setState({...this.state, currentValue: this.result});
    }

    if (requestOperate === "=") {
      if (this.state.currentValue === "") return this.setState({...this.state});
      return this.setState({previousValue: "", currentValue: this.result, operation: ""});
    }

    this.setState({
      previousValue: this.result,
      currentValue: "",
      operation: requestOperate
    })

  }

  evaluate = (previousValue, currentValue, onGoingOperate)=>{
    let result = "0";
    let prev = parseFloat(previousValue);
    let current = parseFloat(currentValue);
    if (isNaN(prev) || (isNaN(current))) return this.state.previousValue;
    switch(onGoingOperate){
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev-current;
        break;
      case "*":
        result = prev*current;
        break;
      case "/":
        result = prev/current;
        break;
      default:
        result = this.state.previousValue;
        break;
    }
    if (!Number.isFinite(result)) return "Cannot divide by zero";
    return result;
  }

  render() {
    return (
      <div className="exerciseCalculator">
        <div className="calculator">
          <div className="calculator-output">
            <div className="result-previous">{this.state.previousValue} {this.state.operation}</div>
            <div className="result-current">{this.state.currentValue}</div>
          </div>
          <div className="calculator-grid">
            <button onClick={(event)=>{this.getDigit(event)}}>7</button>
            <button onClick={(event)=>{this.getDigit(event)}}>8</button>
            <button onClick={(event)=>{this.getDigit(event)}}>9</button>
            <button onClick={(event)=>{this.getOperation(event)}}>/</button>
            <button onClick={(event)=>{this.getOperation(event)}}>CE</button>
            <button onClick={(event)=>{this.getDigit(event)}}>4</button>
            <button onClick={(event)=>{this.getDigit(event)}}>5</button>
            <button onClick={(event)=>{this.getDigit(event)}}>6</button>
            <button onClick={(event)=>{this.getOperation(event)}}>*</button>
            <button onClick={(event)=>{this.getOperation(event)}}>C</button>
            <button onClick={(event)=>{this.getDigit(event)}}>1</button>
            <button onClick={(event)=>{this.getDigit(event)}}>2</button>
            <button onClick={(event)=>{this.getDigit(event)}}>3</button>
            <button onClick={(event)=>{this.getOperation(event)}}>-</button>
            <button onClick={(event)=>{this.getOperation(event)}} className="span-col-two">=</button>
            <button onClick={(event)=>{this.getDigit(event)}} className="span-row-two">0</button>
            <button onClick={(event)=>{this.getDigit(event)}} className="text-bold">.</button>
            <button onClick={(event)=>{this.getOperation(event)}}>+</button>
          </div>
        </div>
      </div>
    )
  }
}
