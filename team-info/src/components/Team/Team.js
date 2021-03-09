import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Team = (props) => {
  const { strTeam, strSport, strTeamBadge } = props.team;
  console.log(props);
  return (
    <div>
      <div className="col">
        <div className="card h-100 shadow bg-white p-5 rounded border-0 m-4">
          <img className="card-img" src={strTeamBadge} alt="" />
          <div class="card-body">
            <h2 className="card-title">{strTeam}</h2>
            <p className="card-text">Sports type: {strSport}</p>
            <button className="btn btn-primary">Explore <FontAwesomeIcon icon={faArrowRight} /> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
