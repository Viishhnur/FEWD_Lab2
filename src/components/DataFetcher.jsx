import React  , { useState , useEffect} from 'react';

function DataFetcher(){
    const [data,setData] = useState(null);

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error('Error fetching data:', error));
    },[data]);

    if (!data) {
        return <div>Loading...</div>;
    }   
    return (
        <div>
            <h1>Fetched Data</h1>
            <ul>
                {data.map(item => (
                    <li key={item.id}>{item.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default DataFetcher;