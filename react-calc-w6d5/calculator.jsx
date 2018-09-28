import React from 'react';

class Calculator extends React.Component{
  constructor(props){
    super(props);
    this.state =  {num1: "",num2: "",result: 0};
    this.setNum1 = this.setNum1.bind(this);
    this.setNum2 = this.setNum2.bind(this);
  }

  //your code here

  render(){
    return (
      <div>
        <h1>${this.state.result}</h1>
      </div>
    );
  }
}

setNum1(e) {
  let num1 = e.currentTarget.value || "";
  this.setState({num1: num1})
  // value = {this.state.num1}
}
setNum2(e) {
  let num2 = e.currentTarget.value || "";
  this.setState({num2: num2})
  // value = {this.state.num2}
}

add(e) {
  e.preventDefault();
  let res = this.num1 + this.num2;
  this.setState({result: res})
}
subtract(e) {
  e.preventDefault();
  let res = this.num1 - this.num2;
  this.setState({result: res})
}
multiply(e) {
  e.preventDefault();
  let res = this.num1 * this.num2;
  this.setState({result: res})
}
divide(e) {
  e.preventDefault();
  let res = this.num1 / this.num2;
  this.setState({result: res})
}

export default Calculator;
