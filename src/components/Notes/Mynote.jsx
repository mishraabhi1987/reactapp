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
    <div>
         <CreateNote passNote = { addNote }/>
      
        {addItem.map((val, index) => {
            return <Note key={index} id={index} title={val.title} content={val.content} onClick={deletenotes}/>
        })}

    </div>
  );
}
export default Mynote;