import React, {useState} from 'react';
import img from "./Pics/reg.png";

const MyRegistration = () => {
    const [registration, setstate] = useState({
        Personname : '',
        Email : '',
        Password : '',
        Address: '',
        City: '',
        State: '',
        Zip: '',
    });

    const checkdata = (event) => {
        const {name, value} = event.target;
        setstate((prevData) =>{
            return {
                ...prevData,
                [name]: value
            }
        })
    }
    const [message, setMessage] = useState({text: "", type: ""});
    const submitform = (event) => {
        event.preventDefault();
        if(registration.Personname !== "" && registration.Email !== "" && registration.Password !== ""){
            setMessage({text: "Congratulation!! Your registration has been submitted successfully", type: "success"});
        }
        else {
            setMessage({text: "Awww.... Please fill the required field", type: "danger"});
        }
    }
    return(
        <div className="contaner">
            {message.text && <div className={`alert alert-${message.type}`} role="alert" style={{textAlign: "center"}}>{message.text}</div>}
            <form className="Registration col-sm-9 col-md-9 col-lg-6" onSubmit={submitform}>
            <h1 style={{textAlign:"center"}}><img src={img} alt="registration icon" style={{width: "50px", height: "100%", borderRadius: "25px"}}/> Registration Form</h1>
                <div className="form-row col-md-12">
                <div className="form-group col-md-12">
                    <label htmlFor="inputName">Name*</label>
                    <input type="text" className="form-control" id="inputName" name="Personname" value={registration.Personname} onChange={checkdata} placeholder="Name"/>
                </div>
                <div className="form-row col-md-12">
                <div className="form-group col-md-6">
                    <label htmlFor="inputEmail4">Email*</label>
                    <input type="email" className="form-control" id="inputEmail4" name="Email" value={registration.Email} onChange={checkdata} placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-5">
                    <label htmlFor="inputPassword4">Password*</label>
                    <input type="password" className="form-control" id="inputPassword4" name="Password" value={registration.Password} onChange={checkdata} placeholder="Password"/>
                    </div>
                </div>
                </div>
                <div className="form-group col-md-12">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" value={registration.Address} name="Address" onChange={checkdata} placeholder="1234 Main St"/>
                </div>
                <div className="form-row col-md-12">
                    <div className="form-group col-md-4">
                    <label htmlFor="inputCity">City</label>
                    <input type="text" className="form-control" name="City" value={registration.City} onChange={checkdata} id="inputCity" placeholder="City"/>
                    </div>
                    <div className="form-group col-md-4">
                    <label htmlFor="inputState">State</label>
                    <input type="text" className="form-control" name="State" value={registration.State} onChange={checkdata} id="inputstate" placeholder="State"/>
                    </div>
                    <div className="form-group col-md-2">
                    <label htmlFor="inputZip">Zip</label>
                    <input type="text" className="form-control" name="Zip" value={registration.Zip} onChange={checkdata} id="inputZip" placeholder="Zip"/>
                    </div>
                </div>
                <div className="mx-auto" style={{width: "100%", textAlign:"center"}}><button type="submit" className="btn btn-dark">Register</button></div>
                
            </form>
        </div>
    )
}
export default MyRegistration;