import React from 'react';
import img from './Pics/it.png';

const Home = () => {
    return(
        <div>
            <div className="container">
                <p className="hometext">
                    <h1 style={{color: "#08BECE", paddingBottom: "15px"}}>Welcome to My Website</h1>
                    <p>This is a website created on React. You will feel the immersive exerience of React JS.</p>
                    <b>Features you can use:</b>
                    <p>You can explore Image Search, ToDo App, Notes, Web Series Data, Registration and Users...</p>
                    <input type="submit" className="btn btn-outline-warning" value="Checkout" />
                </p>
            <img src={img} className="animateimg" />
            </div>
        </div>
    )

}
export default Home;