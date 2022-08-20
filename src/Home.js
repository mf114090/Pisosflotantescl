import React from "react";
import pisosflotantesca from "./img/pisosflotantesca.jpg"


const Home =()=> {
    return (
        <div className="home bg-black">
          <div className="container">
            <div className="container-fluid text-center">
                <img src={pisosflotantesca} className="img-fluid" height="" alt="..." />
            </div>
          </div>
        </div>
    )
}

export default Home;