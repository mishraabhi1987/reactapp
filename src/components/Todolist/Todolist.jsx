import React, {useState} from 'react';
import img from '../Pics/todo.png';
const Todolist = () => {

    // Save into state
    const [todolist, settodolist] = useState("");
    const gettodotext = (event) => {
        settodolist(event.target.value);
    }

    // state for msg
    const [msg, setmsg] = useState();

    // Add List
    const [displaytodo, setdisplaytodo] = useState([]);
    const addtodolist = () => {
        if(todolist){
            setdisplaytodo((prevdata) => {
                return [...prevdata, todolist]
            });
            settodolist('');
            setmsg("");
        }
        else{
            setmsg(() => {
                return  <div className="alert alert-danger" role="alert" style={{textAlign: "center"}}>Please type your task to add in the list</div>
            })
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

    // On enter 

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addtodolist();
        }
    }

    return (
        <>
        <br/>
        <div className="todolist container">
            <h1><img src={img} style={{width: "75px", height: "100%"}}/> To-do List</h1>
            <hr/>
            {msg}
            <input type="text" name="todobox" value={todolist} placeholder="Type your to-do list here..." className="todobox" onChange={gettodotext} onKeyDown={handleKeyDown}/><input className="btn btn-info" onClick={addtodolist} type="submit" value="+" style={{width: "8%", height: "52px", marginLeft: "-5px",  marginTop: "-5px"}} />
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