import React from 'react'
import { useSelector } from 'react-redux'
import {Leaderboard} from '../../components/Leaderboard'


function Results() {
  const score = useSelector(state => state.UserDetails.score)
  return (
      <>
      <h1>Results</h1>
      <h3>Score: {score}</h3>
      <h5>Leaderboard</h5>
      <Leaderboard/>
      </>
    
  )
};

export default Results
