import React, { createContext } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Menu from "./components/Menu";
import Mynote from "./components/Notes/Mynote";
import Todolist from "./components/Todolist/Todolist";
import Apidata from "./components/Hooks/Apidata";
import Home from "./components/Home";
import MyRegistration from "./components/Registration";
import Search from "./components/Search";
import Footer from "./components/Footer";

const Mydata = createContext();
const App = () => {
  return (
    <div className="app-wrapper">
      <Menu />
      <div
        className="container-fluid content-wrapper"
        style={{
          background: "rgb(255,255,255, 0.9)",
          borderRadius: "5px",
          minHeight: "580px",
          width: "99%",
          margin: "0 auto",
          padding: "20px",
        }}
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/notes" component={Mynote} />
          <Route path="/Todolist" component={Todolist} />
          <Route path="/apidata" component={Apidata} />
          <Route path="/registration" component={MyRegistration} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
};

export default App;
export { Mydata };
