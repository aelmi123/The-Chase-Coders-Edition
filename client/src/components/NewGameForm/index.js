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
  const [room , setRoom] = useState()
  const [questions, setQuestions] = useState(20)

  const updateName = (e) => {
    const inputName = e.target.value
    setName(inputName)
  }
  const updatePlayers = (e) => {
    const inputPlayers = e.target.value
    setPlayers(inputPlayers)
  }
  const updateRoom = (e) => {
    const inputRoom = e.target.value
    setRoom(inputRoom)
  }
  const updateDifficulty = (e) => {
    const inputDiff = e.target.value
    setDifficulty(inputDiff)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const userData = {name: name, players: players, room: room, difficulty: difficulty, questions: questions}
    console.log(userData)
    dispatch(userInfo(userData))
    navigate('/topics')
  }

  return (
    <div className='box'>
    <form className='newGame' onSubmit={handleSubmit}>
        <label htmlFor='Name'>Name:</label>
        <input type='text' name='Name' placeholder='Name' onChange={updateName}/>

        <label htmlFor='NumPlayers'>No. of Players:</label>
        <input type='number' name='NumPlayers' placeholder="How Many Players?"min="1" max="5" onChange={updatePlayers}/>

        <label htmlFor='RoomName'>Room Name:</label>
        <input type='text' placeholder="Enter Room Name" name='RoomName'  onChange={updateRoom}/>

        <label htmlFor='Difficulty'>Difficulty:</label>
        <select id='Difficulty' onChange={updateDifficulty}> 
            <option >Please Select One</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <input className="start-game"type='submit' value='Start Game'/>
    </form>