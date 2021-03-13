import React, {useState} from 'react';
import img from '../Pics/todo.png';
const Todolist = () => {

    // Save into state
    const [todolist, settodolist] = useState("");
    const gettodotext = (event) => {
        settodolist(event.target.value);
    }

    // Add List
    const [displaytodo, setdisplaytodo] = useState([]);
    const addtodolist = () => {
        if(todolist !== ""){
            setdisplaytodo((prevdata) => {
                return [...prevdata, todolist]
            });
            settodolist('');
        }
    }

    // Delete List
    
    const deleteitems = (event) => {
        const elemid = event.target.id;
        setdisplaytodo((olddata) => {
            return olddata.filter((arryelem, index) => {
                return index != elemid;
            })
        })
    }
    return (
        <>
        <br/>
        <div className="todolist container">
            <h1><img src={img} style={{width: "75px", height: "100%"}}/> To-do List</h1>
            <hr/>
            <input type="text" name="todobox" value={todolist} placeholder="Type your note here..." className="todobox" onChange={gettodotext} /><input className="btn btn-info" onClick={addtodolist} type="submit" value="+" style={{width: "8%", height: "52px", marginLeft: "-5px",  marginTop: "-5px"}} />
            <ul className="list-group list-group-flush" style={{marginTop: "20px"}}>
            {displaytodo.map((todoval, index) => {
                return (
                <>
                <li className="list-group-item" key={index} id={index}>
                {index + 1}. {todoval}
                <a href="#" className="btn-delete float-right" onClick={deleteitems}>
                    <span id={index} className="material-icons">remove_circle</span></a>
                </li>
                </>
                )
            })}
            </ul>
        </div>
        <br/>
        </>
    )
}
export default Todolist;