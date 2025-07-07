import React from 'react';

function InputField(props){
    return (
        <input type={props.type} name={props.name} id={props.id} value={props.value} onChange={props.handleChange}/>
    );
}