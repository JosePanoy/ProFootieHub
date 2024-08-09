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
      <div className="team-info-container">
        {team ? (
          <div className="team-info-grid">
            <div className="team-header">
              <img src={team.strBadge} alt={`${team.strTeam} Badge`} className="team-badge" />
              <img src={team.strLogo} alt={`${team.strTeam} Logo`} className="team-logo" />
            </div>
            <div className="team-name">
              <h2>{team.strTeam}</h2>
            </div>
            <div className="team-details">
              <p><strong>League:</strong> {team.strLeague}</p>
              <p><strong>Stadium:</strong> {team.strStadium}</p>
              <p><strong>Founded:</strong> {team.intFormedYear}</p>
              <p><strong>Country:</strong> {team.strCountry}</p>
            </div>
            <div className="team-description">
              <p><strong>Description:</strong> {team.strDescriptionEN}</p>
            </div>
            <div className="team-links">
              <p><strong>Website:</strong> <a href={team.strWebsite} target="_blank" rel="noopener noreferrer">{team.strWebsite}</a></p>
              <p><strong>Facebook:</strong> <a href={team.strFacebook} target="_blank" rel="noopener noreferrer">{team.strFacebook}</a></p>
              <p><strong>Twitter:</strong> <a href={team.strTwitter} target="_blank" rel="noopener noreferrer">{team.strTwitter}</a></p>
              <p><strong>Instagram:</strong> <a href={team.strInstagram} target="_blank" rel="noopener noreferrer">{team.strInstagram}</a></p>
            </div>
          </div>
        ) : (
          <p>No team data available.</p>
        )}
      </div>
    </>
  );
}

export default TeamInfo;
