import React from "react";
import team1 from "../assets/img/team1.png";
import team2 from "../assets/img/team2.png";
import team3 from "../assets/img/team3.png";
import red from "../assets/img/Group.png";

function Team() {
  return (
    <div id="team" className="relative py-28">
      <h2 className="text-red-500 font-medium text-3xl text-center">
        Meet our Team
      </h2>
      <h3 className="text-center  font-extrabold text-3xl mt-5 mb-14">
        Experience Team Members
      </h3>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 my-16">
        <div>
          <img src={team1} />
          <h3 className="m-2"> Ukash Mohammed </h3>
          <h5 className="m-2"> Software Engineer </h5>
        </div>

        <div>
          <img src={team2} />
          <h3 className="m-2"> Ukash Mohammed </h3>
          <h5 className="m-2"> Software Engineer </h5>
        </div>

        <div>
          <img src={team3} />
          <h3 className="m-2"> Ukash Mohammed </h3>
          <h5 className="m-2"> Software Engineer </h5>
        </div>
      </div>

      <img
        className="absolute top-10 right-0 w-10 h-10 xl:w-14 xl:h-28"
        src={red}
      />
      <img
        className="absolute left-0 bottom-10 w-10 h-10 xl:w-14 xl:h-28"
        src={red}
      />
    </div>
  );
}

export default Team;
