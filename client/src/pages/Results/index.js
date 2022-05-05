import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import {Leaderboard} from '../../components/Leaderboard'
import { useNavigate } from 'react-router-dom';
import './styles.css'
import axios from 'axios';

export const Results = () => {
  const navigate = useNavigate();
  const score = useSelector(state => state.score)
  console.log(score)

  return (
      <>
      <h1 className="resultTitle">Results</h1>
      <h3 id="scoreTitle">Score: {score}</h3>
      {score<10?<><h2 id='status'>Better luck next time</h2><img src='https://www.cambridge.org/elt/blog/wp-content/uploads/2019/07/Sad-Face-Emoji-480x480.png.webp' alt='sad face'></img></>:<><h2>Nice going!</h2><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Mr._Smiley_Face.svg/2048px-Mr._Smiley_Face.svg.png' alt='happy face'></img></>}
      <h5 id='leaderboardTitle'>Leaderboard</h5>
      <div id='resultLeaderbaord'>
      <Leaderboard/>
      <button onClick={() => navigate('/')}>Play again?</button>
      </div>
      </>
    
  )
};


