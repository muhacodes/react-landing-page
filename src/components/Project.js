import React from "react";
import reddot from "../assets/img/Group.png";
import img1 from "../assets/img/Image (3).png";
import img2 from "../assets/img/image 3.png";
import orangeBackgroundColor from "../assets/img/Rectangle 6 (1).png";
import img3 from "../assets/img/Rectangle 2.png";

function Project() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center p-10 md:p-20">
        <div className="flex relative  w-[20rem] md:w-[30rem] h-[30rem]">
          <img className="absolute top-0 left-0 h-20 w-14" src={reddot} />
          <img className="absolute top-5 left-10 h-4/5 w-2/3" src={img1} />
          <img
            className="absolute bottom-20 right-0 md:right-10 h-50"
            src={img2}
          />
        </div>

        <div>
          <h2 className="text-red-500 font-medium text-3xl text-center">
            Who we are
          </h2>
          <h3 className="text-center font-extrabold text-3xl mt-5 mb-14">
            Have A Project In Mind? <br></br> Let’s Get To Work
          </h3>

          <p className="text-gray-500 my-5">
            {" "}
            Sed ut perspiciatis unde omnis iste natus sit voluptatem
            <br></br> accusantium doloremque laudantium totam rem apereaque
            <br></br> abillo inventore veritatis quasi architecto beatae
          </p>
          <ul className="list-decimal font-semibold text-gray-700 ml-2">
            <li> Business Planning, Strategy </li>
            <li> Financial Projections and Analysis </li>
            <li> International Business Oppotunities </li>
          </ul>
        </div>
      </div>

      {/* Latest Project Case */}

      <div className="my-20">
        <h2 className="text-red-500 font-medium text-3xl text-center">
          Latest Project and Case
        </h2>
        <h3 className="text-center  font-extrabold text-3xl mt-5 mb-14">
          Let's Looks Our Global Projects
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-10 ">
          <div className="relative  h-[30rem]">
            <img
              className="absolute inset-0 z-0 w-full h-full"
              src={img3}
              alt="Background Image"
            />
            <img
              className="absolute inset-0 z-1 w-full h-full"
              src={orangeBackgroundColor}
              alt="Foreground Image"
            />
            <label className="text-white absolute left-5 bottom-20 text-2xl font-bold">
              {" "}
              Technical Analysis{" "}
            </label>
            <p className="text-white absolute bottom-5 left-5 text-start text-sm font-thin">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have{" "}
            </p>
          </div>

          <div className="relative  h-[30rem]">
            <img
              className="absolute inset-0 z-0 w-full h-full"
              src={img3}
              alt="Background Image"
            />
            <img
              className="absolute inset-0 z-1 w-full h-full"
              src={orangeBackgroundColor}
              alt="Foreground Image"
            />
            <label className="text-white absolute left-5 bottom-20 text-2xl font-bold">
              {" "}
              Technical Analysis{" "}
            </label>
            <p className="text-white absolute bottom-5 left-5 text-start text-sm font-thin">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have{" "}
            </p>
          </div>

          <div className="relative  h-[30rem]">
            <img
              className="absolute inset-0 z-0 w-full h-full"
              src={img3}
              alt="Background Image"
            />
            <img
              className="absolute inset-0 z-1 w-full h-full"
              src={orangeBackgroundColor}
              alt="Foreground Image"
            />
            <label className="text-white absolute left-5 bottom-20 text-2xl font-bold">
              {" "}
              Technical Analysis{" "}
            </label>
            <p className="text-white absolute bottom-5 left-5 text-start text-sm font-thin">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have{" "}
            </p>
          </div>
          <div className="relative  h-[30rem]">
            <img
              className="absolute inset-0 z-0 w-full h-full"
              src={img3}
              alt="Background Image"
            />
            <img
              className="absolute inset-0 z-1 w-full h-full"
              src={orangeBackgroundColor}
              alt="Foreground Image"
            />
            <label className="text-white absolute left-5 bottom-20 text-2xl font-bold">
              {" "}
              Technical Analysis{" "}
            </label>
            <p className="text-white absolute bottom-5 left-5 text-start text-sm font-thin">
              {" "}
              There are many variations of passages of Lorem Ipsum available,
              but the majority have{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
// <label> Technical Analysis </label>
{
  /*  */
}
