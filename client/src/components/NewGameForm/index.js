import React, { useState } from 'react'
import './style.css'
import { useNavigate } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { userInfo } from "../../actions/EventActions"


export const NewGameForm = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const [name, setName] = useState()
  const [difficulty, setDifficulty ] = useState()
  const [players, setPlayers ] = useState()
  const [questions, setQuestions] = useState()

  const updateName = (e) => {
    const inputName = e.target.value
    setName(inputName)
  }
  const updatePlayers = (e) => {
    const inputPlayers = e.target.value
    setPlayers(inputPlayers)
  }
  const updateDifficulty = (e) => {
    const inputDiff = e.target.value
    setDifficulty(inputDiff)
  }
  const updateQuestions = (e) => {
    const inputQuestion = e.target.value
    setQuestions(inputQuestion)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {name: name, players: players, difficulty: difficulty, questions: questions}
    console.log(userInfo)
    dispatch(userInfo(userData))
    navigate('/topics')
  }

  return (
    <div className='box'>
    <form className='newGame' onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name:</label>
        <input type='text' name='Name' placeholder='Name' onChange={updateName}/>

        <label htmlFor='NumPlayers'>No. of Players:</label>
        <input type='number' name='NumPlayers' min="1" max="5" onChange={updatePlayers}/>

        <label htmlFor='Difficulty'>Difficulty:</label>
        <select id='Difficulty' onChange={updateDifficulty}> 
            <option >Please Select One</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <label htmlFor='NumQuestions'>No. of Questions</label>
        <input type='number' name='NumQuestions' min="1" max="20" onChange={updateQuestions}/>

        <input type='submit' value='Start Game'/>
    </form>
    </div>
  )
}
