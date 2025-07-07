import React , {useState,useEffect} from 'react';
import axios from 'axios';

export default function Question2() {
    const [formData,setFormData] = useState({
        id: '',
        title: '',
    });

    const url = 'https://jsonplaceholder.typicode.com/todos';
    const fetchData = async () => {
        try{
            let res = await axios.get(url);
            console.log(res.data[0].title);
            setFormData({
                id : res.data[0].id,
                title : res.data[0].title
            });

        }catch(err){
            console.error("Error fetching data:", err);
        }
    }
    const updateData = async (data) =>{
        await axios.put(`${url}/${data.id}`,{
            id: parseInt(data.id), // assuming you want to update the same id
            userId: 1, // assuming you want to keep userId as 1
            title: data.title,
            completed: false // assuming you want to keep completed as false
        })
        .then(res =>{
            console.log("Data updated successfully:", res.data);
            alert("Data updated successfully");
        })
        .catch(err => {
            console.error("Error updating data:", err);
            alert("Error updating data");
        });
    }
    useEffect(()=>{
        fetchData();
    },[]); // first Mount 
    const handleChange = (e) => {
        const {name,value} = e.target;
        setFormData(prev => ({ // just remember to return a new object
            ...prev,
            [name] : value
        }));
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        updateData(formData);
    }

    return  (
        <div>

            <form onSubmit={handleSubmit}>
                <input type="number" name="id" id="id" min={0} placeholder='enter id' value = {formData.id} onChange={handleChange}/>
                <br />
                <br />
                <input type="text" name="title" id="title" placeholder='enter title' value = {formData.title} onChange={handleChange}/>

                <br />
                <br />
                <button type='submit'>Update details</button>
            </form>
        </div>
    );
}