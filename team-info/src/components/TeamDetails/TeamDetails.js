
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import './TeamDetails.css'

const TeamDetails = () => {
    const {teamId}=useParams();
    const [teamInfo, setTeamInfo] = useState([]);
    useEffect(() =>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamInfo(data.teams[0]))
    },[teamId])
    console.log(teamInfo)
    const {strTeamBadge, strTeam, intFormedYear, strCountry, strGender, strSport, strDescriptionEN, strTeamFanart3} = teamInfo;
    return (
        <div className="teamDetails">
            <Topbar></Topbar>
            <Card className="text-white bg-primary rounded mt-3 mb-2 ml-5 mr-5">
            <Card.Body className="text-left">
                <Card.Title className="text-left">{strTeam}</Card.Title>
                <Card.Text className="text-left">
                    <p>Founded: {intFormedYear}</p>
                    <p>Country: {strCountry}</p>
                    <p>Sport Type: {strSport}</p>
                    <p>Gender: {strGender}</p>
                </Card.Text>
            </Card.Body>
            <Card.Body className="text-right">
            <img src={strTeamFanart3} className="rounded" alt="" width="40%"/>
            </Card.Body>
            </Card>
            <div className="text-white mt-3 mb-2 ml-5 mr-5">
                <p>
                    {strDescriptionEN}
                </p>
            </div>
        </div>
    );
};

export default TeamDetails;