import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

export const Leaderboard = () => {
    const [leaderboard, setLeaderboard] = useState([])
    const leaderboardFetch = async() =>{
        const { data } = await axios.get('http://localhost:3001/leaderboard')
        console.log(data)
        setLeaderboard(data)
    }
    useEffect(() => {
       leaderboardFetch()
    }, [])
    const renderRows = () => {
        console.log(leaderboard)
        return(leaderboard.map((user, i) => {return (
            <tr key={i}>
                <td>{user.username}</td>
                <td>{user.score}</td>
            </tr>
        )}));
    };
    return (
        <table classname="leaderboard">
        <thead>
            <tr>
                <th className="title"> Username </th>
                <th className="title title 1"> Score </th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
        </table>
    )
}
