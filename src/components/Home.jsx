import React from "react";
import img from "./Pics/it.png";
import { useHistory } from "react-router-dom";

const Home = () => {
  const navg = useHistory();
  console.log(navg);
  return (
    <div>
      <div className="container">
        <p className="hometext">
          <h1 style={{ color: "#08BECE", paddingBottom: "15px" }}>
            Welcome to My Website
          </h1>
          <p>
            This website is created on React. You will feel the immersive
            experience of React JS.
          </p>
          <b style={{ marginBottom: "5px", display: "block" }}>
            Features you can use:
          </b>
          <p>
            You can explore ToDo App, Notes, Search for Images and Movies,
            Registration and Users...
          </p>
          <input
            type="submit"
            onClick={() => navg.push("Todolist")}
            className="btn btn-outline-warning"
            value="Checkout"
          />
        </p>
        <img src={img} className="animateimg" />
      </div>
    </div>
  );
};
export default Home;
