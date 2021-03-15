import React, {useState} from 'react';

import CreateNote from './CreateNote'
import Note from './Note';

const Mynote = () => {
  const [addItem, setAddItem] = useState([]);
  const addNote = (note) => {
      setAddItem((prevData) => {
        return [...prevData, note];
      });
  };
  const deletenotes = (event) => {
    const elemid = event.target.id;
    setAddItem((olddata) => {
      return olddata.filter((arryelem, index) => {
          return index != elemid;
      })
    })
  }

  return (
    <>
    <div className="row">
    <div className="col-md-8 col-lg-8 col-xl-5" style={{margin: "0 auto", textAlign: "right"}}>
         <CreateNote passNote = { addNote }/>
    </div>
   <div style={{width: "100%", margin: "0 auto", display: "block"}}>
        {addItem.map((val, index) => {
            return <Note key={index} id={index} title={val.title} content={val.content} onClick={deletenotes}/>
        })}
    </div>
    </div>
    </>
  );
}
export default Mynote;