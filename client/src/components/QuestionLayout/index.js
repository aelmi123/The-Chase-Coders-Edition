import axios from 'axios';
import React, { useEffect, useState }  from 'react'
import {useSelector} from 'react-redux'
import {  useNavigate } from 'react-router-dom';
import { updateScore } from '../../actions/EventActions';
import { Timer } from '../Timer'


export const QuestionLayout = ({currQues, setCurrQues, questions, score, setScore, setQuestions, correct}) => {
  const navigate = useNavigate();
  const UserDetails = useSelector(state=>state.UserDetails)
  const {difficulty}= UserDetails
  const selectedTopic = useSelector(state => state.selectedTopic)
  const [selected, setSelected] = useState()
  const [options, setOptions] = useState();

  // useEffect(() => {
  //   console.log(questions)
  //   setOptions(
  //     questions &&
  //       handleShuffle([
  //         questions[currQues]?.correct_answer,
  //         ...questions[currQues]?.incorrect_answers,
  //       ])
  //   );
  // }, [currQues, questions]);

  // console.log(questions);

  // const handleShuffle = (options) => {
  //   return options.sort(() => Math.random() - 0.5);
  // };

  const handleSelect = (i) => {
    if (selected === i && selected === correct) {
      return 'select'
    }
    else if(selected === i && selected!== correct) {
      return 'wrong'
    }
    else if (i === correct) {
      return 'select'
    }
  }
  const handleCheck = (i) => {
    setSelected(i)
    if (i === correct) {
      setScore(score + 1)
    }
  }
  const submitScore = async() => {
    const opt = {
      username: UserDetails.name,
      score: score
    }
    await axios.post('http://localhost:3001/leaderboard',opt)
  }

  const handleNext = () => {
    if (currQues >= 20) {
      submitScore()
      updateScore(score)
      navigate('/result')

    }
    else if (selected) {
      setCurrQues(currQues + 1)
      setSelected()
    }
  }
  return (
    <div className='container'>


      <div className='row ' style={{marginTop:"12%"}}>
        <div className='col-md-8 bg-primary'>

          <div className='p-4 d-flex justify-content-center align-items-center '>
              <h1>Question {currQues + 1}:</h1>
              <h6 className='bg-light p-4 w-50 text-center border rounded'>hello</h6>

          </div>

          <div className='p-2 d-flex  justify-content-center align-items-center rounded '>
              <div className='' style={{marginRight:"10px",fontSize:"25px"}}>Time:</div>
              <div  className='text-lg' style={{fontSize:"25px"}}><Timer/></div>
          </div>

          <div className=' d-flex  justify-content-around align-items-center rounded '>
    
              {options && options.map((i) => {return(<button className={`bg-white border rounded ${selected && handleSelect(i)}`} key={i} onClick={() => handleCheck(i)} disabled={selected}>{i}</button>)})}

              <button onClick={() => handleNext}>{currQues > 20 ? "Submit" : "Next Question"}</button>

          </div>

        </div>

        <div className='col-md-4 bg-secondary p-4'>
          <div className='p-4 d-flex justify-content-center align-items-center '>
            <h6 className='bg-light p-4 w-50 text-center border rounded'> Score: {score}</h6>

          </div>  

          <div className='d-flex justify-content-center align-items-center'>
                <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Level:</h6>
                <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{difficulty} </h6>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
              <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Topic:</h6>
              <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{selectedTopic} </h6>
          </div>

        </div>

      </div>
    </div>
  )
}





