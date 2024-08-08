import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar.jsx';
import '../css/teams.css';

function Teams() {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeams = async () => {
            try {
                const res = await fetch("https://www.thesportsdb.com/api/v1/json/3/search_all_teams.php?l=English%20Premier%20League");
                if (!res.ok) {
                    throw new Error(`HTTP error! Status: ${res.status}`);
                }
                const data = await res.json();
                console.log(data); // Check if data contains teams
                setTeams(data.teams || []);
            } catch (error) {
                setError(error);
                console.error("Unable to fetch data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeams();
    }, []);

    if (loading) return <p className="loading">Loading...</p>;
    if (error) return <p className="error">Error: {error.message}</p>;
    if (teams.length === 0) return <p>No team data available.</p>;

    return (
        <div className="teams-container">
            <Navbar />
            <h1 className="title">Teams</h1>
            <div className="teams-grid">
                {teams.map((team) => (
                    <div key={team.idTeam} className="team-card">
                        <img 
                            src={team.strTeamBadge || 'https://via.placeholder.com/150?text=No+Image'} 
                            alt={team.strTeam || 'Team Logo'} 
                            className="team-logo" 
                        />
                        <p className="team-name">{team.strTeam}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Teams;
