import React, { useState } from 'react';
function CounterHandler(BaseComponent){
    const NewComponent = (props) => {
        const [count,setCount] = useState(0);

        const incrementCount = () => {
            setCount((prevCount) => prevCount + 1);
        };


        return <BaseComponent count = {count} incrementCount = {incrementCount} {... props}/> // ensure u pass props to base component
    }

    return NewComponent; // Returning the new component with enhanced functionality
}

export default CounterHandler;