import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <div className="width-full bg-black h-16">
        <nav className="flex flex-row justify-between mr-36">
          <div className="border-black"> </div>
          <div className="sm:hidden mr-32">
          </div>
          <div className="pl-56 flex flex-row justify-between mt-4 bg-black">
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block text-white">
              
                Home
            </div>
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden text-white ">
              
                Vehicle
         
            </div>
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block hidden text-white ">
                Register
            </div>
            <div className=" relative pl-6  pr-1 mr-20 hover:bg-yellow-color rounded-md md:block text-white hidden ">
              
               Signin
              
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;