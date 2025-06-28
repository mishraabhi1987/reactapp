import React, { useState, useEffect } from "react";
import img from "../Pics/todo.png";
import initialTodolist from "../../data/todolist";

const Todolist = () => {
  const [todolist, settodolist] = useState("");
  const [displaytodo, setdisplaytodo] = useState([]);
  const [msg, setmsg] = useState("");

  // Load todos from localStorage on initial render
  useEffect(() => {
    try {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        setdisplaytodo(JSON.parse(savedTodos));
      } else {
        setdisplaytodo(initialTodolist);
      }
    } catch (error) {
      console.error("Failed to load todos from localStorage", error);
      setdisplaytodo(initialTodolist);
    }
  }, []);

  // Save todos to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("todos", JSON.stringify(displaytodo));
    } catch (error) {
      console.error("Failed to save todos to localStorage", error);
    }
  }, [displaytodo]);

  const gettodotext = (event) => {
    settodolist(event.target.value);
  };

  const addtodolist = () => {
    if (todolist.trim()) {
      setdisplaytodo((prevdata) => [...prevdata, todolist.trim()]);
      settodolist("");
      setmsg("");
    } else {
      setmsg(
        <div
          className="alert alert-danger"
          role="alert"
          style={{ textAlign: "center" }}
        >
          Please type your task to add in the list
        </div>
      );
    }
  };

  const deleteitems = (idToDelete) => {
    setdisplaytodo((olddata) =>
      olddata.filter((_, index) => index !== idToDelete)
    );
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      addtodolist();
    }
  };

  return (
    <>
      <br />
      <div className="todolist container">
        <h1>
          <img
            src={img}
            alt="todo icon"
            style={{ width: "75px", height: "100%" }}
          />{" "}
          To-do List
        </h1>
        <hr />
        {msg}
        <input
          type="text"
          name="todobox"
          value={todolist}
          placeholder="Type your to-do list here..."
          className="todobox"
          onChange={gettodotext}
          onKeyDown={handleKeyDown}
        />
        <input
          className="btn btn-info"
          onClick={addtodolist}
          type="submit"
          value="+"
          style={{
            width: "8%",
            height: "52px",
            marginLeft: "-5px",
            marginTop: "-5px",
          }}
        />
        <ul
          className="list-group list-group-flush"
          style={{ marginTop: "20px" }}
        >
          {displaytodo.map((todoval, index) => {
            return (
              <li
                className="list-group-item d-flex justify-content-between align-items-center"
                key={index}
              >
                {index + 1}. {todoval}
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteitems(index)}
                >
                  <span
                    className="material-icons"
                    style={{ verticalAlign: "middle" }}
                  >
                    remove_circle
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <br />
    </>
  );
};
export default Todolist;
