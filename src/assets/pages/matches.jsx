import React, { useState, useEffect } from 'react';
import Navbar from '../../../components/navbar.jsx';

function Matches() {
    const [team, setTeam] = useState(null);

    useEffect(() => {
        
        fetch('https://www.thesportsdb.com/api/v1/json/3/searchteams.php?t=Barcelona')
            .then(response => response.json())
            .then(data => {
            
                if (data.teams && data.teams.length > 0) {
                    setTeam(data.teams[0]);
                }
            })
            .catch(error => console.error('Error fetching team data:', error));
    }, []);

    return (
        <>
            <Navbar />
            <h1 style={{ marginTop: '100px' }}>Matches</h1>
            {team && (
                <div style={{ textAlign: 'center', marginTop: '20px' }}>
                    <h2>{team.strTeam}</h2>
                    <img src={team.strBadge} alt={`${team.strTeam} Badge`} style={{ width: '150px' }} />
                </div>
            )}
        </>
    );
}

export default Matches;
