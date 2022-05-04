import React, { useState, useEffect } from 'react'
import axios from 'axios'


function Results() {
    const URL = ('http://localhost:3001/leaderboard')
    const [leaderboard, setLeaderboard] = useState([])
    useEffect(() => {
        async function getLeaderboard(){
            try{
                const { data } = await axios.get(URL)
                setLeaderboard(data.leaderboard)

            } catch(error){
                console.log(error)
            }
        }
        getLeaderboard()
    }, [])

   const renderRows = () => {
       return leaderboard.map(user => {
           <tr>
               <td>{user.username}</td>
               <td>{user.score}</td>
           </tr>
       });
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
};

export default Results
