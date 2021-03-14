import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import mypic from './Pics/mypic.jpg';

const currentDate = new Date();
let currentmytime = new Date().toLocaleTimeString();
const newcurrentDate = currentDate.getHours();
let txtwelcomemsg = '';
const txtcolor = {};
if(newcurrentDate >= 1 && newcurrentDate < 12){
    txtwelcomemsg = 'Good Morning';
    txtcolor.color = "#9DE11B";

}else if(newcurrentDate >=12 && newcurrentDate < 19){
    txtwelcomemsg = 'Good Afternoon';
    txtcolor.color = "#ffc107";
}else{
    txtwelcomemsg = "Good Night";
    txtcolor.color = "#D28FE1";
}


const Menu = () => {
    const [mytime, setstate] = useState(currentmytime);
    setInterval(() => {
        currentmytime = new Date().toLocaleTimeString();
        setstate(currentmytime);
    }, 1000);
    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/reactapp/"><img src={mypic} style={{width: "50px", height: "50px", borderRadius: "25px"}} /> Abhishek App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/">Home</NavLink>
                        </li>
                         <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/Todolist">To-Do List</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/notes">Notes</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/apidata">Users <span className="sr-only">(current)</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/registration">Registration</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink exact activeClassName="activemenu" className="nav-link" to="/reactapp/search">Search</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink exact activeClassName="activemenu" className="dropdown-item" to="#">Hooks</NavLink>
                                <NavLink exact activeClassName="activemenu" className="dropdown-item" to="#">Link</NavLink>
                                <div className="dropdown-divider"></div>
                                <NavLink exact activeClassName="activemenu" className="dropdown-item" to="#">Something else here</NavLink>
                            </div>
                        </li>
                    </ul>
                    {/* <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                </div>
                <div>
                     <h2 className="welcomemsg">Hey, <span style={txtcolor}>{ txtwelcomemsg } <b>Date: {currentDate.toLocaleDateString()}, Time: {mytime}</b></span></h2>
                 </div>
            </nav>
        </div>
    )
}
export default Menu;