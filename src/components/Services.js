import React from "react";
import img1 from "../assets/img/Group 16.png";
import img2 from "../assets/img/Group 17.png";

function Services() {
  return (
    <div className="flex flex-col pt-10 md:p-20 justify-center items-center text-center bg-bg-main text-white">
      <h2 className="text-red-500 font-medium text-3xl text-center">
        Our Services
      </h2>
      <h3 className="text-center font-extrabold text-3xl mt-5 mb-14">
        Amazing Business Services
      </h3>

      <div className="flex flex-col md:flex-row justify-center md:gap-10 overflow-hidden">
        <img src={img1} className="max-w-full h-auto" alt="Service 1" />
        <img src={img2} className="max-w-full h-auto" alt="Service 2" />
      </div>
    </div>
  );
}

export default Services;
