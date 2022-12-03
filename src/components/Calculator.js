import React, { useState } from 'react';
import './Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const handleClick = (e) => {
    setState({ ...state, ...calculate(state, e.target.name) });
  };

  return (
    <div className="wrap">
      <>
        <p className="result">
          <span>{state.total}</span>
          <span>{state.operation}</span>
          <span>{state.next}</span>
        </p>
        <div className="container">
          <button type="button" className="item item-2" onClick={handleClick} name="AC">AC</button>
          <button type="button" className="item item-3" onClick={handleClick} name="+/-">+/-</button>
          <button type="button" className="item item-4" onClick={handleClick} name="%">%</button>
          <button type="button" className="item item-5 bg" onClick={handleClick} name="÷">÷</button>
          <button type="button" className="item item-6" onClick={handleClick} name="7">7</button>
          <button type="button" className="item item-7" onClick={handleClick} name="8">8</button>
          <button type="button" className="item item-8" onClick={handleClick} name="9">9</button>
          <button type="button" className="item item-9 bg" onClick={handleClick} name="x">x</button>
          <button type="button" className="item item-10" onClick={handleClick} name="4">4</button>
          <button type="button" className="item item-11" onClick={handleClick} name="5">5</button>
          <button type="button" className="item item-12" onClick={handleClick} name="6">6</button>
          <button type="button" className="item item-13 bg" onClick={handleClick} name="-">-</button>
          <button type="button" className="item item-14" onClick={handleClick} name="1">1</button>
          <button type="button" className="item item-15" onClick={handleClick} name="2">2</button>
          <button type="button" className="item item-16" onClick={handleClick} name="3">3</button>
          <button type="button" className="item item-17 bg" onClick={handleClick} name="+">+</button>
          <button type="button" className="item item-18" onClick={handleClick} name="0">0</button>
          <button type="button" className="item item-19" onClick={handleClick} name=".">.</button>
          <button type="button" className="item item-20 bg" onClick={handleClick} name="=">=</button>
        </div>

      </>
    </div>
  );
};
export default Calculator;
