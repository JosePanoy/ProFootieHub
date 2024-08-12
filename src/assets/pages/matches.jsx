import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar.jsx';
import { useNavigate } from 'react-router-dom';
import '../css/matches.css';

function Matches() {
    const [laLigaTeams, setLaLigaTeams] = useState([]);
    const [eplTeams, setEplTeams] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTeams = async () => {
            const laLigaResponse = await fetch('/api/football-data/v4/competitions/PD/teams', {
                headers: { 'X-Auth-Token': 'ace877938369422289ffeb29801e56ca' }
            });
            const eplResponse = await fetch('/api/football-data/v4/competitions/PL/teams', {
                headers: { 'X-Auth-Token': 'ace877938369422289ffeb29801e56ca' }
            });

            const laLigaData = await laLigaResponse.json();
            const eplData = await eplResponse.json();

            setLaLigaTeams(laLigaData.teams);
            setEplTeams(eplData.teams);
        };

        fetchTeams();
    }, []);

    const handleTeamClick = (teamId) => {
        navigate(`/matches-info/${teamId}`);
    };

    return (
        <>
            <Navbar />
            
            <section style={{ marginTop: '70px' }}>
                <h2 className="section-title">La Liga</h2>
                <ul className="teams-list">
                    {laLigaTeams.map(team => (
                        <li key={team.id} className="team-item" onClick={() => handleTeamClick(team.id)}>
                            {team.name}
                        </li>
                    ))}
                </ul>
            </section>

            <section style={{ marginTop: '50px' }}>
                <h2 className="section-title">English Premier League</h2>
                <ul className="teams-list">
                    {eplTeams.map(team => (
                        <li key={team.id} className="team-item" onClick={() => handleTeamClick(team.id)}>
                            {team.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
}

export default Matches;
