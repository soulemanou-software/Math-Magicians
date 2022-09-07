/* eslint-disable react/button-has-type */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

export default class Calculator extends Component {
  render() {
    return (
      <div className="calculator">
        <div className="calculator__display">
          <div className="calculator__display__result">
            <span>0</span>
          </div>
          <div className="calculator__display__operation">
            <span>0</span>
          </div>
        </div>
        <div className="calculator__buttons">
          <button className="calculator__button calculator__button--clear ">C</button>
          <button className="calculator__button calculator__button--sign">+/-</button>
          <button className="calculator__button calculator__button--percent">%</button>
          <button className="calculator__button calculator__button--divide operator">/</button>
          <button className="calculator__button calculator__button--seven">7</button>
          <button className="calculator__button calculator__button--eight">8</button>
          <button className="calculator__button calculator__button--nine">9</button>
          <button className="calculator__button calculator__button--multiply operator">*</button>
          <button className="calculator__button calculator__button--four">4</button>
          <button className="calculator__button calculator__button--five">5</button>
          <button className="calculator__button calculator__button--six">6</button>
          <button className="calculator__button calculator__button--subtract operator">-</button>
          <button className="calculator__button calculator__button--one">1</button>
          <button className="calculator__button calculator__button--two">2</button>
          <button className="calculator__button calculator__button--three">3</button>
          <button className="calculator__button calculator__button--add operator">+</button>
          <button className="calculator__button calculator__button--zero">0</button>
          <button className="calculator__button calculator__button--decimal">.</button>
          <button className="calculator__button calculator__button--equals operator">=</button>
        </div>
      </div>
    );
  }
}
