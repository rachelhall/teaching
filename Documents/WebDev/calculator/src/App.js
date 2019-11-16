import React from 'react';
import './App.css';
import KeypadComponent from './components/KeypadComponent';
import ResultComponent from './components/ResultComponent';

export default class App extends React.Component {

  constructor(){
    super();

    this.state = {
      result: ""
    }
  };

  onClick = button => {
    if(button === "="){
      this.calculate()
    }

    else if(button === "C"){
      this.reset();
    }

    else if(button === "CE"){
      this.backspace();
    }

    else {
      this.setState({
        result: this.state.result + button
      })
    }
  }

  calculate = () => {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      })
    } catch (e) {
      this.setState({
        result: "error"
      })
    }
  };

  reset = () => {
    this.setState({
      result: ""
    })
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  };


  render() {
    return (
      <div className="App">
        <div className="calculator-body">
          <ResultComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} /> 
          <div className="description">
           <p>This calculator uses React to dynamically update a paragraph in the result component based on the result calculated inside of the keypad component. </p>
           <p>The keypad component is a series of buttons that passes the value of the button to props whenever they are clicked.</p>
           <p>Props is received in app.js where they are passed into a calculate function that uses the built in javascript evaluate function to evaluate the string. The result is set to state inside of result where it’s then displayed in the result component.</p>
          </div>
        </div>


    </div>
    )
  }
}