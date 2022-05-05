import React from 'react'
import { useSelector } from 'react-redux'
import {Leaderboard} from '../../components/Leaderboard'
import { useNavigate } from 'react-router-dom';
import './styles.css'

export const Results = () => {
  const navigate = useNavigate();
  const score = useSelector(state => state.score)
  return (
      <>
      <h1>Results</h1>
      <h3>Score: {score}</h3>
      {score<10?<><h2>Better luck next time</h2><img src='https://st2.depositphotos.com/1967477/6346/v/600/depositphotos_63465181-stock-illustration-sad-smiley-emoticon-cartoon.jpg' alt='sad face'></img></>:<><h2>Nice going!</h2><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/2048px-Mr._Smiley_Face.svg.png' alt='happy face'></img></>}
      <h5>Leaderboard</h5>
      <Leaderboard/>
      <button onClick={() => navigate('/')}>Play again?</button>
      </>
    
  )
};


