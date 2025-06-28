import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Userimg from "../Pics/user.png";

const Apidata = () => {
  const history = useHistory();

  const [state, setstate] = useState([]);
  const [message, setMessage] = useState({ text: "", type: "" });

  useEffect(() => {
    async function mydata() {
      try {
        const resp = await axios.get(`https://reqres.in/api/users?page=1`);
        setstate(resp.data.data);
      } catch (error) {
        console.error("Failed to fetch users:", error);
        setMessage({ text: "Failed to load user data.", type: "danger" });
      }
    }
    mydata();
  }, []);

  const deletedata = (idToDelete) => {
    setstate((prevdata) => prevdata.filter((user) => user.id !== idToDelete));
  };

  const [addstate, setaddstate] = useState({
    first_name: "",
    last_name: "",
    email: "",
    avatar: "",
  });

  const getadddata = (event) => {
    const { name, value } = event.target;
    setaddstate((olddata) => ({
      ...olddata,
      [name]: value,
    }));
  };

  const addempdata = () => {
    if (addstate.first_name && addstate.last_name && addstate.email) {
      const apiPayload = {
        name: `${addstate.first_name} ${addstate.last_name}`,
        job: "employee",
      };

      axios
        .post("https://reqres.in/api/users", apiPayload)
        .then((response) => {
          const apiResponse = response.data;
          const newUser = {
            id: apiResponse.id,
            email: addstate.email,
            first_name: addstate.first_name,
            last_name: addstate.last_name,
            avatar: addstate.avatar || Userimg,
          };

          setstate((prevdata) => [...prevdata, newUser]);
          setMessage({
            text: `Congratulation!! User ${newUser.first_name} ${newUser.last_name} has been added successfully.`,
            type: "success",
          });
          setaddstate({ first_name: "", last_name: "", email: "", avatar: "" });
          setaddform(false);
        })
        .catch((error) => {
          console.log(error);
          setMessage({
            text: "Oops... something went wrong. Please try again",
            type: "danger",
          });
        });
    } else {
      setMessage({ text: "Please fill all required fields.", type: "danger" });
    }
  };

  const [showaddform, setaddform] = useState(false);
  const addnewuser = () => {
    setaddform(!showaddform);
    setMessage({ text: "", type: "" });
  };

  const nextId = state.length > 0 ? Math.max(...state.map((u) => u.id)) + 1 : 7;

  return (
    <div className="container">
      <table
        className="table table-striped"
        style={{ backgroundColor: "#ffffff" }}
      >
        <tbody>
          <tr>
            <td colSpan="5">
              <h3 style={{ marginTop: "0px" }}>
                <img
                  src={Userimg}
                  alt="add user icon"
                  style={{ width: "35px", height: "35px" }}
                />
                Add User
              </h3>
            </td>
            <td colSpan="1">
              <button
                className="btn btn-dark float-right"
                onClick={addnewuser}
                style={{ marginTop: "5px", marginRight: "15px" }}
              >
                {showaddform ? "Cancel" : "Add New User"}
              </button>
            </td>
          </tr>
          {showaddform && (
            <>
              <tr>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="id"
                    value={nextId}
                    disabled
                    placeholder="ID"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="first_name"
                    value={addstate.first_name}
                    onChange={getadddata}
                    placeholder="First Name*"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="last_name"
                    value={addstate.last_name}
                    onChange={getadddata}
                    placeholder="Last Name*"
                  />
                </td>
                <td>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    value={addstate.email}
                    onChange={getadddata}
                    placeholder="Email*"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    name="avatar"
                    value={addstate.avatar}
                    onChange={getadddata}
                    placeholder="Photo URL"
                  />
                </td>
                <td>
                  <button
                    className="btn btn-success float-right"
                    onClick={addempdata}
                  >
                    Add
                  </button>
                </td>
              </tr>
            </>
          )}
        </tbody>
      </table>
      {message.text && (
        <div
          className={`alert alert-${message.type}`}
          role="alert"
          style={{ textAlign: "center" }}
        >
          {message.text}
        </div>
      )}
      <table
        className="table table-striped"
        style={{ backgroundColor: "#ffffff" }}
      >
        <thead>
          <tr>
            <th scope="col">Photo</th>
            <th scope="col">ID</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">
              <span className="float-right">Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {state.map((val) => {
            return (
              <tr key={val.id}>
                <td>
                  {val.avatar ? (
                    <img
                      alt={val.first_name}
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "5px",
                      }}
                      src={val.avatar}
                    />
                  ) : (
                    <img
                      alt="user"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "5px",
                      }}
                      src={Userimg}
                    />
                  )}
                </td>
                <td>{val.id}</td>
                <td>{val.first_name}</td>
                <td>{val.last_name}</td>
                <td>{val.email}</td>
                <td>
                  <div className="float-right">
                    <input
                      type="submit"
                      className="btn btn-light"
                      value="Edit"
                      onClick={() => history.push("/Hooks")}
                    />
                    &nbsp;&nbsp;
                    <input
                      type="submit"
                      value="Delete"
                      className="btn btn-danger"
                      onClick={() => deletedata(val.id)}
                    />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Apidata;
