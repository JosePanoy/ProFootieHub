import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../../../components/navbar.jsx';
import '../css/matches-info.css';

function MatchesInfo() {
    const { teamId } = useParams();
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        const fetchMatches = async () => {
            const response = await fetch(`/api/football-data/v4/teams/${teamId}/matches?season=2024`, {
                headers: { 'X-Auth-Token': 'ace877938369422289ffeb29801e56ca' }
            });
            const data = await response.json();
            setMatches(data.matches);
        };

        fetchMatches();
    }, [teamId]);

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>
            <Navbar />
            <h2 style={{ marginTop: '70px', cursor: 'default' }}>Upcoming Matches</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Home Team</th>
                        <th>Away Team</th>
                    </tr>
                </thead>
                <tbody>
                    {matches.map(match => (
                        <tr key={match.id}>
                            <td>{formatDate(match.utcDate)}</td>
                            <td style={{cursor: 'pointer'}}>{match.homeTeam.name}</td>
                            <td >{match.awayTeam.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default MatchesInfo;
