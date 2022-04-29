import React from 'react'
import './style.css'

export const NewGameForm = () => {
  return (
    <div className='box'>
    <form className='newGame'>
        <label htmlFor='Name'>Name:</label>
        <input type='text' name='Name' placeholder='Name'/>

        <label htmlFor='NumPlayers'>No. of Players:</label>
        <input type='number' name='NumPlayers' min="1" max="5"/>

        <label htmlFor='Difficulty'>Difficulty:</label>
        <select id='Difficulty'> 
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
        </select>

        <label htmlFor='NumQuestions'>No. of Questions</label>
        <input type='number' name='NumQuestions' min="1" max="20"/>

        <input type='submit' value='Start Game'/>
    </form>
    </div>
  )
}
