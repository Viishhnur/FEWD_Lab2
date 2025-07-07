import React , {useState} from 'react';

export default function ToggleButton(){
    const [isToggled, setIsToggled] = useState(false); // initially not toggled
    const [msg,setMsg] = useState("Toggle the button to change state");
    const handleToggle = (e) => {
        setIsToggled(!isToggled); // toggle the state
        console.log("Toggle button clicked:", e.target);
        setMsg(isToggled ? "Button is OFF" : "Button is ON");
        e.target.style.backgroundColor = isToggled ? "red" : "green";

    }
    return (
        <div>
            <button onClick={handleToggle}>{isToggled ? "ON" : "OFF"}</button>
            <p>{msg}</p>
        </div>
    );
}