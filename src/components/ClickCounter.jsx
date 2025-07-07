import React  from 'react';
import CounterHandler from './CounterHandler';
function ClickCounter(props) {
  
  return (
    <div>
      <h1>Click Counter</h1>
      <p>Count: {props.count}</p>
    <button onClick={props.incrementCount}>Clicke me</button>
    </div>
  );
}
export default CounterHandler(ClickCounter); // HOC usage to enhance ClickCounter with counter functionality

// Old way of implementing ClickCounter component
// import React  , {useState} from 'react';
// function ClickCounter() {
//   const [count, setCount] = useState(0);

//   const incrementCount = () => {
//     setCount((prevCount) => prevCount + 1);
//   };
//   return (
//     <div>
//       <h1>Click Counter</h1>
//       <p>Count: {count}</p>
//     <button onClick={incrementCount}>Clicke me</button>
//     </div>
//   );
// }
// export default ClickCounter;