import React from "react";
import background from "../assets/banner.png";
import Button from "./Button";
import banner from '../assets/banner.png'
import logo from '../assets/img/company-logo.png'
import Navbar from "./Navbar";

function Header() {
//   const backgroundStyle = {
//     backgroundImage: `url(${background})`,
//     backgroundSize: '30%',
//     backgroundPosition: "75%"
//   };

  return (
    <>
    <Navbar />
    <div className="flex flex-col lg:flex-row h-screen gap-10 p-5 center lg:justify-center items-center bg-bg-main">
      <div className="flex flex-col gap-10">
        <h3 className="text-3xl sm:text-5xl text-white font-bold"> Our <strong className="text-red-500">consultation</strong> is <br></br>always in sync <br></br>with your strategy </h3>
        <p className="text-white"> Scelerisque dignissim in leo at magna donec mi metus ipsum luctus nam elit sociis luctus et aliquam libero. </p>
        <span className=""> <Button text='Our Services' /> </span>
      </div>

      <img className="lg:h-2/3 justify-center" src={banner} />
    </div>
    </>
    
  );
}

export default Header;
