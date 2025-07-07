import React  , {useState} from 'react';
import CounterHandler from './CounterHandler';
function HoverCounter(props) {
  
  return (
    <div>
      <h1>Hover Counter</h1>
      <p>Count: {props.count}</p>
    <button onMouseEnter={props.incrementCount}>Hover</button>
    </div>
  );
}
export default CounterHandler(HoverCounter);