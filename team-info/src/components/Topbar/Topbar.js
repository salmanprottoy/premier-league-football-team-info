import React from 'react';
import './Topbar.css'
const Topbar = (props) => {
    console.log(props)
    
    return (
        <div className="Topbar">
            {
                props.title && <h1>Premier League Football Team Info</h1> 
            }
            {
                props.strTeamBadge && <img src={props.strTeamBadge} alt=""/>
            }
        </div>
    );
};

export default Topbar;