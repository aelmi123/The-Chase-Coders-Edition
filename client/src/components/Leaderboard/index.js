import React, { useEffect, useState } from 'react'
import axios from 'axios'

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
        <table>
        <thead>
            <tr>
                <th> Username </th>
                <th> Score </th>
            </tr>
        </thead>
        <tbody>
            {renderRows()}
        </tbody>
        </table>
    )
}
