import React from 'react';
import { NewGameForm } from '../../components/NewGameForm';
import { Leaderboard } from '../../components/Leaderboard'
// import { Timer } from '../../components/Timer'
import './styles.css'

export const Homepage = () => {
  const renderNewForm = e => {
    console.log(e.target.className)
    const div = document.querySelector('.form')
    if (e.target.className === 'hidden'){
      e.target.className = ''
      div.style.display = 'block'

    }
    else {
      e.target.className = 'hidden'
      div.style.display = 'none'
    }
   
  }
  const renderLeaderboard = e => {
    console.log(e.target.className)
    const div = document.querySelector('.leaderboard')
    if (e.target.className === 'hidden'){
      e.target.className = ''
      div.style.display = 'block'

    }
    else {
      e.target.className = 'hidden'
      div.style.display = 'none'
    }
  }
  return (
    <>
    <div className='home'>
      <h1 className='title'>Welcome to You're a Quizard, Harry!</h1>

      <div className='rules'>
        <h3>The Rules</h3>
        <p>The rules for this game are simple, have fun! You need a max of 4 players to play alongside you, but you can however play alone if you dare too. This quiz consists of several categories which you can choice yourself, along with the level of difficulty and players. You score is tracked across each question and will be displayed for you at the end. Make sure to get your answers right so you can top our leaderboard!</p>
      </div>
      {/* <Timer/> */}
      
      <button className='hidden' onClick={renderNewForm}>New Game</button>
      <button>Join Game</button>
      <button className='hidden' onClick={renderLeaderboard}>Leaderboard</button>
      
      
    </div>
    <div className='form'>
    <NewGameForm/>
    </div>
    <div className='leaderboard'>
    <Leaderboard/>
    </div>
    </>
  )
}


