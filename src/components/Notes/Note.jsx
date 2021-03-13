import React from 'react';

const Note = (props) => {
    return(
        <div className="webseries-card">
        <div className="card" style={{width: "14.5rem", borderTop: "5px solid #ffc107"}} id={props.id}>
        <div className="card-body" style={{padding: "0px"}}>
            <h5 className="card-title" style={{color: "#F4B400"}}>{props.title}</h5>
            <hr/>
            <p className="card-text">{props.content}</p>
            <span id={props.id} className="material-icons float-right" style={{cursor: "pointer"}} onClick={props.onClick}>delete</span>
        </div>
        </div>
        </div>
       
    )
}
export default Note;