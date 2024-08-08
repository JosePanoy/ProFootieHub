import React, { useEffect, useState } from 'react';
import Navbar from '../../../components/navbar.jsx';
import '../css/teams.css';

const teamNames1 = [
    'Athletic Club', 'Atlético Madrid', 'Barcelona', 'Cádiz', 'Celta Vigo', 
    'Elche', 'Espanyol', 'Getafe', 'Granada', 'Levante', 'Mallorca', 
    'Osasuna', 'Rayo Vallecano', 'Real Betis', 'Real Madrid', 'Real Sociedad', 
    'Sevilla', 'Valencia', 'Villarreal'
];

const teamNames2 = [
    'Arsenal', 'Aston Villa', 'Bournemouth', 'Brentford', 'Brighton & Hove Albion',
    'Burnley', 'Chelsea', 'Crystal Palace', 'Everton', 'Fulham', 'Liverpool',
    'Luton Town', 'Manchester City', 'Manchester United', 'Newcastle United',
    'Nottingham Forest', 'Sheffield United', 'Tottenham Hotspur', 'West Ham United',
    'Wolverhampton Wanderers'
];

const Teams = () => {
    const [teams1, setTeams1] = useState([]);
    const [teams2, setTeams2] = useState([]);

    useEffect(() => {
        const fetchTeams = async (teamNames, setTeams) => {
            const teamData = await Promise.all(teamNames.map(async teamName => {
                const response = await fetch(`https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=${encodeURIComponent(teamName)}`);
                const data = await response.json();
                return data.teams ? data.teams[0] : null;
            }));
            setTeams(teamData.filter(team => team !== null));
        };

        fetchTeams(teamNames1, setTeams1);
        fetchTeams(teamNames2, setTeams2);
    }, []);

    return (
        <>
            <Navbar />
            <div className="teams-section">
                <h2 style={{textAlign: 'left'}}>La Liga Teams</h2>
                <div className="teams-grid">
                    {teams1.map(team => (
                        <div className="team-card" key={team.idTeam}>
                            <img src={team.strBadge} alt={`${team.strTeam} Badge`} />
                            <h2>{team.strTeam}</h2>
                        </div>
                    ))}
                </div>
            </div>
            <div className="teams-section">
                <h2 style={{textAlign: 'left'}}>English Premier League</h2>
                <div className="teams-grid">
                    {teams2.map(team => (
                        <div className="team-card" key={team.idTeam}>
                            <img src={team.strBadge} alt={`${team.strTeam} Badge`} />
                            <h2>{team.strTeam}</h2>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Teams;
