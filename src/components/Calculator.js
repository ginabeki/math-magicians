import React from 'react';
import './Calculator.css';

function Calculator() {
  return (
    <div className="container">
      <div className="item item-1">0</div>
      <div className="item item-2">AC</div>
      <div className="item item-3">+/-</div>
      <div className="item item-4">%</div>
      <div className="item item-5 bg">÷</div>
      <div className="item item-6">7</div>
      <div className="item item-7">8</div>
      <div className="item item-8">9</div>
      <div className="item item-9 bg">x</div>
      <div className="item item-10">4</div>
      <div className="item item-11">5</div>
      <div className="item item-12">6</div>
      <div className="item item-13 bg">-</div>
      <div className="item item-14">1</div>
      <div className="item item-15">2</div>
      <div className="item item-16">3</div>
      <div className="item item-17 bg">+</div>
      <div className="item item-18">0</div>
      <div className="item item-19">.</div>
      <div className="item item-20 bg">=</div>
    </div>
  );
}

export default Calculator;
