import React, { useEffect, useState }  from 'react'
import { QuestionLayout } from '../../components/QuestionLayout'
import { getTopicId } from '../../actions/EventActions'
import axios from 'axios'

// import axios from 'axios'
import {useSelector} from 'react-redux'
// import { getTopicId } from '../../actions/EventActions'
// import { GetQuestions } from '../../actions/EventActions';
// import { useDispatch } from 'react-redux';

export const Question = () => {
  // const dispatch = useDispatch()
    const [score, setScore] = useState(0)
    const [currQues, setCurrQues] = useState(0);
    const [questions, setQuestions] = useState([])

    const UserDetails = useSelector(state=>state.UserDetails)
    const selectedTopic = useSelector(state => state.selectedTopic)
    const {difficulty}= UserDetails
    const topicId = getTopicId(selectedTopic)

  const getQuestions = async() => {
    
    const { data } = await axios.get(`https://opentdb.com/api.php?amount=20&category=${topicId}&difficulty=${difficulty}&type=multiple`)
    console.log(data.results)
    const quest = data.results
    console.log(quest)
    setQuestions(()=>quest)
    console.log(questions)
 }
 useEffect(()=> {
   getQuestions()
   
 },[])
  // console.log(questions)
  
  return (
    <div>
        <QuestionLayout currQues={currQues} setCurrQues={setCurrQues} questions={questions}  score={score} setScore={setScore} setQuestions={setQuestions} correct={questions[currQues]?.correct_answer} />
    </div>
  )
}
