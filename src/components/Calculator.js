import React, { Component } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (buttonName) => {
    this.setState((state) => calculate(state, buttonName));
  }

  render() {
    const { total, operation, next } = this.state;
    return (
      <div className="wrap">
        <p className="result">
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <div className="container">
          <button type="button" className="item item-2" onClick={(e) => { this.handleClick(e.target.name); }} name="AC">AC</button>
          <button type="button" className="item item-3" onClick={(e) => { this.handleClick(e.target.name); }} name="+/-">+/-</button>
          <button type="button" className="item item-4" onClick={(e) => { this.handleClick(e.target.name); }} name="%">%</button>
          <button type="button" className="item item-5 bg" onClick={(e) => { this.handleClick(e.target.name); }} name="÷">÷</button>
          <button type="button" className="item item-6" onClick={(e) => { this.handleClick(e.target.name); }} name="7">7</button>
          <button type="button" className="item item-7" onClick={(e) => { this.handleClick(e.target.name); }} name="8">8</button>
          <button type="button" className="item item-8" onClick={(e) => { this.handleClick(e.target.name); }} name="9">9</button>
          <button type="button" className="item item-9 bg" onClick={(e) => { this.handleClick(e.target.name); }} name="x">x</button>
          <button type="button" className="item item-10" onClick={(e) => { this.handleClick(e.target.name); }} name="4">4</button>
          <button type="button" className="item item-11" onClick={(e) => { this.handleClick(e.target.name); }} name="5">5</button>
          <button type="button" className="item item-12" onClick={(e) => { this.handleClick(e.target.name); }} name="6">6</button>
          <button type="button" className="item item-13 bg" onClick={(e) => { this.handleClick(e.target.name); }} name="-">-</button>
          <button type="button" className="item item-14" onClick={(e) => { this.handleClick(e.target.name); }} name="1">1</button>
          <button type="button" className="item item-15" onClick={(e) => { this.handleClick(e.target.name); }} name="2">2</button>
          <button type="button" className="item item-16" onClick={(e) => { this.handleClick(e.target.name); }} name="3">3</button>
          <button type="button" className="item item-17 bg" onClick={(e) => { this.handleClick(e.target.name); }} name="+">+</button>
          <button type="button" className="item item-18" onClick={(e) => { this.handleClick(e.target.name); }} name="0">0</button>
          <button type="button" className="item item-19" onClick={(e) => { this.handleClick(e.target.name); }} name=".">.</button>
          <button type="button" className="item item-20 bg" onClick={(e) => { this.handleClick(e.target.name); }} name="=">=</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
