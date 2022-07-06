import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/navbar";
class HomePage extends Component {
  render() {
    return (
      <div className="bg-black overflow-hidden h-full w-full absolute left-0">
        <Navbar />
        <div className="justify-content w-[90%] place-items-center text-white">
            <p className="text-7xl tracking-widest mt-10">E-V track</p>
          <p className="w-[40%] ml-96 text-xl mt-10">
          An online system to help you record details about a vehicle , and be able to track it 
          down  and allocate it whenever you want it.
          </p>
        </div>
        
      </div>
    );
  }
}

export default HomePage;