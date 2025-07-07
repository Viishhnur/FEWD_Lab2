import React , {useRef , useEffect} from 'react';
function UseRefEx(){
    const userName = useRef('');

    const handleInpChange = (event) => {
        userName.current = event.target.value;
        console.log(userName.current); // This will log the current value of the input field
        // Note: This won't trigger a re-render, so the input field won't update visually
        // If you want to see the change in the input field, you can use state instead
        // or force a re-render by using a state variable.
        // For example, you can use a state variable to trigger a re-render:
        // setUserName(event.target.value);
        // But in this case, we are just demonstrating the use of useRef.
    }

    useEffect(()=>{
        userName.current.focus(); // Focus the input field when the component mounts
    });
    return (
        <div>
            <h1>Use Ref Example</h1>
            <input type="text" name="name" id="name" placeholder='enter name' ref={userName} onChange={handleInpChange}/>
            <button>Submit</button>
        </div>
    );
}

export default UseRefEx;