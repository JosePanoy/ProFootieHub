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
              <div className="team-name">{team.strTeam}</div>
            </div>
            <div className="team-details">
              <div className="detail-item"><strong>League:</strong> {team.strLeague}</div>
              <div className="detail-item"><strong>Stadium:</strong> {team.strStadium}</div>
              <div className="detail-item"><strong>Founded:</strong> {team.intFormedYear}</div>
              <div className="detail-item"><strong>Country:</strong> {team.strCountry}</div>
            </div>
            <div className="team-description">
              <p><strong>Description:</strong> {team.strDescriptionEN}</p>
            </div>
            <div className="team-logo">
              <img src={team.strLogo} alt={`${team.strTeam} Logo`} />
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
