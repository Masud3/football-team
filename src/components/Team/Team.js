import React from 'react';
import { Link } from 'react-router-dom';
import './Team.css';

const Team = (props) => {
    const { strTeam, strTeamBadge, idTeam} = props.team;

    return (
        <div id="container" className="team-style">
            <div className="item">
                <img className="img-style" src={strTeamBadge} alt="" />
                <h2>{strTeam}</h2>
                <p>Sports type: Football</p>

                <button className="btn btn-danger">
                    <Link style={{color:'white'}} className="link-style" to={`/team/${idTeam}`}>Explore</Link>
                </button>
            </div>
        </div>
    );
};

export default Team;