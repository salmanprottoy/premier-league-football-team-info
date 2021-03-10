import React, { useEffect, useState } from 'react';
import Team from '../Team/Team';
import './Teams.css';
const Teams = () => {
    const [teamsInfo, setTeamsInfo] = useState([]);
    useEffect(() =>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League`;
        fetch(url)
        .then(response => response.json())
        .then(data => setTeamsInfo(data.teams))
    },[])
    return (
        <div className="Teams-div ml-5 mr-5">
            <div className="row row-cols-md-3 g-3 justify-content-center mt-2">
                {
                    teamsInfo.map((team) => <Team team={team}></Team>)
                }
            </div>
        </div>
    );
};

export default Teams;