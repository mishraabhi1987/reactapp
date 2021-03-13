import React, {createContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Mynote from './components/Notes/Mynote';
import Series from './components/Webseries/series';
import Todolist from './components/Todolist/Todolist';
import Myuseontext from './components/Hooks/Usecontext';
import Apidata from './components/Hooks/Apidata';
import Search from './components/Search/Search';
import Home from './components/Home';
import MyRegistration from './components/Registration';

const Mydata = createContext();
const App = () => {
  return (
    <div>
       <Menu />
       <div className="container-fluid" style={{background: "rgb(255,255,255, 0.9)", minHeight: "630px", borderRadius: "5px", width: "99%", margin: "0 auto", padding: "20px"}}>
       <Switch>
         <Route exact path="/" component={Home} />
         <Route exact path="/search" component={Search} />
         <Route path="/notes" component={Mynote} />
         <Route path="/Todolist" component={Todolist} />
         <Route path="/webseries" component={Series} />
         <Route path="/Hooks">
          <Mydata.Provider value={"This is my data"}>
          <Myuseontext />
          </Mydata.Provider>
         </Route>
          <Route path='/apidata' component={Apidata} />
          <Route path='/registration' component={MyRegistration} />
       </Switch>
       </div>
    </div>
  );
}

export default App;
export {Mydata};
