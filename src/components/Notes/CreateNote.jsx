import React, {useState} from 'react';
import img from "../Pics/note.png";

const CreateNote = (props) => {
    const [note, setNote] = useState({
        title: "",
        content: "",
    });
    const InputEvent = (event) => {
        const { name, value } = event.target;
        setNote((prevData) => {
           return{
                ...prevData,
                [name]: value,
           }
        });
    };
    const addEvent = () => {
        props.passNote(note);
        setNote({
            title: "",
            content: "",
        });
    };
    return(
        <div className="main-note">
            <div className="keep">
                <h1><img src={img} style={{width: "50px", height: "100%"}}/> My Notes</h1>
            </div>
            <div className="form-container" style={{backgroundColor: "#ffffff", borderTop: "5px solid #08BECE", padding: "20px", borderRadius: "5px", marginBottom: "50px"}}>
            <form>
                <input type="text" name="title" value={note.title} onChange={InputEvent} placeholder="Title" className="form-control" />
                <textarea name="content" value={note.content} onChange={InputEvent} className="form-control" placeholder="Write Note...">
                </textarea><br/>
            </form>
            <button className="btn btn-warning" onClick={addEvent}>Add</button>
            </div>
        </div>
    )
}
export default CreateNote;