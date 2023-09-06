import React from "react";
import icon1 from "../assets/img/icon1.png";
import icon2 from "../assets/img/icon2.png";
import icon3 from "../assets/img/icon3.png";
import img1 from "../assets/img/Rectangle 2.png";
import img2 from "../assets/img/Rectangle 3.png";
import Button from "./Button";
import redDot from "../assets/img/Group.png";

function Features() {
  return (
    <div id="about" className="py-28">
      <h2 className="text-red-500 font-medium text-3xl text-center">
        {" "}
        Meet our Team{" "}
      </h2>
      <h3 className="text-center font-extrabold text-3xl mt-5 mb-14">
        {" "}
        Awesome Service With Our Tools{" "}
      </h3>
      <div className="flex flex-col md:flex-row justify-center text-center items-center gap-5 lg:gap-16">
        <div className="">
          <img className="mx-auto" src={icon1} alt="Icon 1" />
          <h3 className="font-bold my-4">App Development</h3>
          <p className="w-60 text-gray-500 font-light">
            Helping families live intelligently means  we're always working to
            bring our customers.
          </p>
        </div>

        <div className="">
          <img className="mx-auto" src={icon1} alt="Icon 2" />
          <h3 className="font-bold my-4">App Development</h3>
          <p className="w-60 text-gray-500 font-light">
            Helping families live intelligently means  we're always working to
            bring our customers.
          </p>
        </div>

        <div className="">
          <img className="mx-auto" src={icon1} alt="Icon 3" />
          <h3 className="font-bold my-4">App Development</h3>
          <p className="w-60 text-gray-500 font-light">
            Helping families live intelligently means  we're always working to
            bring our customers.
          </p>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row justify-center items-center mt-20 gap-28">
        <div className="flex relative gap-4 w-80 h-72">
          <img className="absolute left-12 top-0 h-2/3" src={img1} />
          <img className="absolute right-0 bottom-0 h-2/3" src={img2} />
          <img className="absolute left-0 bottom-0 h-20" src={redDot} />
        </div>
        <div className="px-5 md:px-0">
          <h3 className="text-red-500 font-thin text-xl"> About </h3>
          <h3 className="text-4xl text-gray-900 font-extrabold my-4">
            {" "}
            Influencer Marketing <br></br> for Your Business{" "}
          </h3>
          <p className="font-light text-gray-600 my-5">
            With over 25 years of experience, we have crafted thousands{" "}
            <br></br> of Strategic discovery process that enables us to peel
            back <br></br> the Layers which enable us to understand, connect,
            represent <br></br> and Dominate your market.
          </p>
          <button className="bg-redbutton p-1 text-white w-72 h-14 text-start my-5">
            {" "}
            Phone number : 0752731477{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Features;
