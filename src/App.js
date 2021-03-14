import React, {createContext} from 'react';
import {Route, Switch} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './components/Menu';
import Mynote from './components/Notes/Mynote';
import Todolist from './components/Todolist/Todolist';
import Apidata from './components/Hooks/Apidata';
import Home from './components/Home';
import MyRegistration from './components/Registration';
import Search from './components/Search';

const Mydata = createContext();
const App = () => {
  return (
    <div>
       <Menu />
       <div className="container-fluid" style={{background: "rgb(255,255,255, 0.9)", minHeight: "630px", borderRadius: "5px", width: "99%", margin: "0 auto", padding: "20px"}}>
       <Switch>
         <Route exact path="/reactapp/" component={Home} />
         <Route path="/reactapp/notes" component={Mynote} />
         <Route path="/reactapp/Todolist" component={Todolist} />
         <Route path='/reactapp/apidata' component={Apidata} />
         <Route path='/reactapp/registration' component={MyRegistration} />
         <Route path='/reactapp/Search' component={Search} />
       </Switch>
       </div>
    </div>
  );
}

export default App;
export {Mydata};
