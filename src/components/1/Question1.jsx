import React , {useState} from 'react';
function Question1(){
    const [isLoggedIn,setIsLoggedIn] = useState(false);

    const handleClick = () => {
        setIsLoggedIn(!isLoggedIn);
        console.log("User logged in");
    }
    return (
        <div>
            <button onClick={handleClick}>Login</button>
            {isLoggedIn ? <h1>Welcome to Home Page</h1> : <h1>Login Page</h1>}
        </div>
    );
}

export default Question1;