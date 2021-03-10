import React from "react";
import "./Team.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const Team = (props) => {
  const { strTeam, strSport, strTeamBadge, idTeam } = props.team;
  return (
    <div>
      <div className="col">
        <div className="card text-center h-100 shadow bg-white p-5 rounded border-0 m-4">
          <img className="card-img img-fluid" src={strTeamBadge} alt="" />
          <div class="card-body">
            <h1 className="card-title">{strTeam}</h1>
            <p className="card-text">Sports type: {strSport}</p>
            <Link to={`/team/${idTeam}`}>
              <button className="btn btn-primary">
                Explore <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
