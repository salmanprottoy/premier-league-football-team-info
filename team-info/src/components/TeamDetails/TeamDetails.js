import React, { useEffect, useState } from "react";
import {} from "react-bootstrap";
import { useParams } from "react-router-dom";
import Topbar from "../Topbar/Topbar";
import "./TeamDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faFlag,
  faFutbol,
  faMars,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const TeamDetails = () => {
  const { teamId } = useParams();
  const [teamInfo, setTeamInfo] = useState([]);
  useEffect(() => {
    const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTeamInfo(data.teams[0]));
  }, [teamId]);
  console.log(teamInfo);
  const {
    strTeamBadge,
    strTeam,
    intFormedYear,
    strCountry,
    strGender,
    strSport,
    strDescriptionEN,
    strTeamFanart3,
    strStadiumDescription,
  } = teamInfo;
  return (
    <div className="teamDetails">
      <Topbar></Topbar>
      <div className="container">
        <div className="bg-primary rounded m-5">
          <div className="p-5 text-white">
            <h2>{strTeam}</h2>
            <h5>
              {" "}
              <small>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> Founded:{" "}
                {intFormedYear}
              </small>{" "}
            </h5>
            <h5>
              {" "}
              <small>
                <FontAwesomeIcon icon={faFlag} /> Country: {strCountry}
              </small>
            </h5>
            <h5>
              {" "}
              <small>
                <FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}
              </small>
            </h5>
            <h5>
              <small>
                <FontAwesomeIcon icon={faMars} /> Gender: {strGender}
              </small>
            </h5>
          </div>
          <div className="p-5">
            <img src={strTeamFanart3} className="rounded" alt="" width="100%" />
          </div>
        </div>
        <div>
          <div className="text-white p-2 m-2 ">
            <p>{strDescriptionEN}</p>
          </div>
          <div className="text-white p-2 m-2 ">
            <p>{strStadiumDescription}</p>
          </div>
        </div>
        <div className="d-flex justify-content-center text-white p-3">
          <div className="m-2">
            <button className="btn btn-info iconBtn">
              <FontAwesomeIcon icon={faTwitter} />
            </button>
          </div>
          <div className="m-2">
            <button className="btn btn-primary iconBtn">
              <FontAwesomeIcon icon={faFacebook} />
            </button>
          </div>
          <div className="m-2">
            <button className="btn btn-danger iconBtn">
              <FontAwesomeIcon icon={faYoutube} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDetails;
