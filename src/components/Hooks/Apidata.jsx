import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Apidata = () => {

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
    const [addstate, setaddstate] = useState(
        [{id: "", email: "", avatar: "", last_name: "", first_name: ""}]
    );

    const getadddata = (event) => {
        const {name, value} = event.target;
        setaddstate((oldatata) => {
            return {
                ...oldatata, 
                [name]: value
            }
        });
    };
    const addempdata = () => {
        axios.post("https://reqres.in/api/users", addstate)
        .then(response => {
            console.log(response)
            setstate((prevdata) => {
                return [...prevdata, addstate]
            })
        })
        .catch(error => {
            console.log(error);
        })
    };
    return(
        <div className="container">
            <table className="table table-striped" style={{backgroundColor: "#ffffff"}}>
                <tbody>
                    <tr>
                        <td><input type="text" className="form-control" name="avatar" value={addstate.avatar} onChange={getadddata} placeholder="Photo" /></td>
                        <td><input type="text" className="form-control" name="id" value={addstate.id} onChange={getadddata} placeholder="ID" /></td>
                        <td><input type="text" className="form-control" name="first_name" value={addstate.first_name} onChange={getadddata} placeholder="First Name" /></td>
                        <td><input type="text" className="form-control" name="last_name" value={addstate.last_name} onChange={getadddata} placeholder="Last Name" /></td>
                        <td><input type="email" className="form-control" name="email" value={addstate.email} onChange={getadddata} placeholder="Email" /></td>
                        <td><button className="btn btn-primary float-right" onClick={addempdata}>Add</button></td>
                    </tr>
                </tbody>
            </table>
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
                            <td><img alt={val.first_name} style={{width: "50px", height: "50px", borderRadius: "5px"}} src={val.avatar} /></td>
                            <td>{val.id}</td>
                            <td>{val.first_name}</td>
                            <td>{val.last_name}</td>
                            <td>{val.email}</td>
                            <td><div className="float-right"><input id={val.id} type="submit" className="btn btn-success" value="Edit" onClick={() => History.push("/Hooks")} />&nbsp;&nbsp;<input id={index} type="submit" value="Delete" className="btn btn-danger" onClick={deletedata}/></div></td>
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