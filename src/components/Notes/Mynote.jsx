import React, { useState, useEffect } from 'react';

import CreateNote from './CreateNote';
import Note from './Note';

const Mynote = () => {
  const [addItem, setAddItem] = useState([]);

  useEffect(() => {
    try {
      const savedNotes = localStorage.getItem('notes');
      if (savedNotes) {
        setAddItem(JSON.parse(savedNotes));
      }
    } catch (error) {
      console.error("Failed to load notes from localStorage", error);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('notes', JSON.stringify(addItem));
    } catch (error) {
      console.error("Failed to save notes to localStorage", error);
    }
  }, [addItem]);

  const addNote = (note) => {
    setAddItem((prevData) => {
      return [...prevData, note];
    });
  };
  const deletenotes = (id) => {
    setAddItem((olddata) => 
      olddata.filter((_, index) => index !== id)
    );
  };

  return (
    <>
      <div className="row">
        <div className="col-md-8 col-lg-8 col-xl-5" style={{ margin: "0 auto", textAlign: "right" }}>
          <CreateNote passNote={addNote} />
        </div>
      </div>
      <div className="row mt-4">
        {addItem.map((val, index) => {
          return <Note key={index} id={index} title={val.title} content={val.content} onClick={deletenotes} />;
        })}
      </div>
    </>
  );
}
export default Mynote;