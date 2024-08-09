import React from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../../../components/navbar.jsx';
import '../css/team-info.css';

function TeamInfo() {
  const location = useLocation();
  const { team } = location.state || {};

  return (
    <>
    <Navbar />
      <h1>Team Details</h1>
      {team && (
        <div>
          <img src={team.strBadge} alt={`${team.strTeam} Badge`} />
          <h2>{team.strTeam}</h2>
        </div>
      )}
    </>
  );
}

export default TeamInfo;
