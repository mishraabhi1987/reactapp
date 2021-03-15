import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import Userimg from '../Pics/user.png';

const Apidata = () => {
    console.log(Userimg);
    const History = useHistory();
    // Fetching data from api
    const [state, setstate] = useState(
        [{id: "", email: "", avatar: "", last_name: "", first_name: ""}]
    );

    useEffect(() => {
        async function mydata(){
            const resp = await axios.get(`https://reqres.in/api/users?page=1`);
            setstate(resp.data.data);
        }
        mydata();
    }, []);

    // Deleting Data
    const deletedata = (event) => {
        const deleteid = event.target.id
        setstate((prevdata) => {
            return [...prevdata].filter((myelem, index) => {
                return index != deleteid
            })
        });
    };

    // Editing Data
    // const editedata = (event) => {
    //    console.log(event.target.id);
    // }
    
    // Adding Data
    const newuserid = state.length + 1 
    const [addstate, setaddstate] = useState(
        [{avatar: Userimg, id: newuserid, email: "", last_name: "", first_name: ""}]
    );

    const getadddata = (event) => {
        setaddstate((oldatata) => {
            return {
                ...oldatata, 
                id: newuserid,
                avatar: Userimg
            }
        });
        const {name, value} = event.target;
        setaddstate((oldatata) => {
            return {
                ...oldatata, 
                [name]: value
            }
        });
    };
        // message display
        const [msgdisplay, setmsgdisplay] = useState();

     // Adding data   
    const addempdata = () => {
        if(addstate.first_name === null && addstate.last_name === null && addstate.email === null) {
            setmsgdisplay(() => {
                return  <div class="alert alert-danger" role="alert" style={{textAlign: "center"}}>Oops... something went wrong. Please try again </div>
            })
        }else {
        setaddstate((oldatata) => {
            return {
                ...oldatata, 
                id: newuserid + 1
            }
        });
        axios.post("https://reqres.in/api/users", addstate)
        .then(response => {
            setstate((prevdata) => {
                return [...prevdata, addstate]
            });
            setmsgdisplay(() => {
                return <div class="alert alert-success" role="alert" style={{textAlign: "center"}}><i>congratulation!!</i> User {addstate.first_name} {addstate.last_name} has been added successfully.</div>
            });
            setaddstate(() => {
                return {first_name: "", last_name: "", email: "", avatar: ""}
            });
        })
        .catch(error => {
            console.log(error);
            setmsgdisplay(() => {
                return  <div class="alert alert-danger" role="alert" style={{textAlign: "center"}}>Oops... something went wrong. Please try again </div>
            })
        })
    }
    };
    // Add new user 
    const [showaddform, setaddform] = useState("false");
    const addnewuser = () => {
        if(showaddform === "false"){
            setaddform("true");
        }
        else setaddform("false");
    }
    return(
        <div className="container">
            <table className="table table-striped" style={{backgroundColor: "#ffffff"}}>
                <tbody>
                    <tr>
                        <td colSpan="4"><h3 style={{marginTop: "0px"}}><img src={Userimg} style={{width: "35px", height: "35px"}} />Add User</h3></td>
                        <td colSpan="2"><button className="btn btn-dark float-right" onClick={addnewuser} style={{marginTop: "5px", marginRight: "15px"}}>Add New User</button></td>
                    </tr>
                   {showaddform === "false" ? null : <><tr><td>ID</td><td>First Name*</td><td>Last Name*</td><td>Email*</td><td>Photo</td></tr>
                    <tr>
                        <td><input type="text" className="form-control" name="id" value={newuserid} disabled placeholder="ID" /></td>
                        <td><input type="text" className="form-control" name="first_name" value={addstate.first_name} onChange={getadddata} placeholder="First Name" /></td>
                        <td><input type="text" className="form-control" name="last_name" value={addstate.last_name} onChange={getadddata} placeholder="Last Name" /></td>
                        <td><input type="email" className="form-control" name="email" value={addstate.email} onChange={getadddata} placeholder="Email" /></td>
                        <td><input type="text" className="form-control" name="avatar" value={addstate.avatar} onChange={getadddata} placeholder="Photo" /></td>
                        <td><button className="btn btn-success float-right" onClick={addempdata}>Add</button></td>
                    </tr></>}
                </tbody>
            </table>
            {msgdisplay}
            <table className="table table-striped" style={{backgroundColor: "#ffffff"}}>
            <thead>
                <tr>
                <th scope="col">Photo</th>
                <th scope="col">ID</th>
                <th scope="col">First Name</th>
                <th scope="col">Last Name</th>
                <th scope="col">Email</th>
                <th scope="col"><span className="float-right">Action</span></th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((val, index) => {
                        return(
                            <tr key={index} id={val.id}>
                            <td>{val.avatar === "" ?  <img alt="user" style={{width: "50px", height: "50px", borderRadius: "5px"}} src={Userimg} /> : <img alt={val.first_name} style={{width: "50px", height: "50px", borderRadius: "5px"}} src={val.avatar} />}</td>
                            <td>{val.id}</td>
                            <td>{val.first_name}</td>
                            <td>{val.last_name}</td>
                            <td>{val.email}</td>
                            <td><div className="float-right"><input id={val.id} type="submit" className="btn btn-light" value="Edit" onClick={() => History.push("/Hooks")} />&nbsp;&nbsp;<input id={index} type="submit" value="Delete" className="btn btn-danger" onClick={deletedata}/></div></td>
                            </tr>
                        )
                    })
                }
            </tbody>
            </table>
        </div>
    )

}
export default Apidata;