import React from 'react'
import { useSelector } from 'react-redux';

export const JoinForm = () => {
    const navigate = useNavigate();
  const dispatch=useDispatch()
  const [name, setName] = useState()
  const token = useSelector(state => state.UserDetails.token)

  const handleSubmit = (e) => {
    e.preventDefault()
    
  }

  return (
    <div className='box'>
    <form className='newGame' onSubmit={handleSubmit}>
        <label htmlFor='RoomName'>Enter Room Name:</label>
        <input type='text' name='RoomName' placeholder='RoomName'/>

        <input type='submit' value='Start Game'/>
    </form>
    </div>
  )
}
