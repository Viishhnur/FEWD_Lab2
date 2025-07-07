import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function HomePage(){
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    const handleChange = (event) => {
        setQuery(event.target.value);
        console.log("Query changed:", event.target.value);
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.elements.query.value);
        navigate(`/search?term=${encodeURIComponent(e.target.elements.query.value)}`)
    }
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>This is the main page of the application.</p>

            <form onSubmit={handleSubmit}>
                <input type="text" name="query" placeholder='entery query' value={query} onChange={handleChange} />
                <button type='submit'>Click me!!</button>
            </form>
        </div>
    );
}