import React from 'react';

export default function Contact(props){
    return(
        <div className="main-div">
            <img src={`./images/${props.image}`} title={props.alttext} />
            <p>{props.name}</p>
            <h2>{props.skill}</h2>
        </div>
    )
} 