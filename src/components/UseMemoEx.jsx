import React , { useState, useMemo } from 'react';
function UseMemoEx(){
    const [number, setNumber] = useState(0);
    const [inc, setInc] = useState(0);

    const factorial = useMemo(()=>{
        return factorialOf(number);
    },[number]);
    // useMemo will only recalculate factorial when number changes, not when inc changes    
    function factorialOf(n) {
        console.log("Calculating factorial for", n);
        return n <= 0 ? 1 : n * factorialOf(n - 1);
    }

    const handleInpChange = (event) => {
        setNumber(event.target.value);
    }

    const handleClick = () => {
        setInc(inc + 1);
        console.log("Incremented:", inc);
    }
    return (
        <div>
            <h1>Factorial</h1>
            Factorial of 
            <input type="number" name="fact" id="fact" placeholder='enter a number' value={number} onChange={handleInpChange}/> is {factorial}
            <button onClick={handleClick}>Re-render</button>
        </div>
    );
}

export default UseMemoEx;