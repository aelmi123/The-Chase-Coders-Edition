import React, { useState }  from 'react'
import {useSelector} from 'react-redux'
import {  useNavigate } from 'react-router-dom';
// import { getTopicId } from '../../actions/EventActions'
// import axios from 'axios'

export const QuestionLayout = ({currQues, setCurrQues, questions, options, score, setScore, setQuestions, correct}) => {
  const navigate = useNavigate();
  const UserDetails = useSelector(state=>state.UserDetails)
  const {difficulty}= UserDetails
  const selectedTopic = useSelector(state => state.selectedTopic)
  const [selected, setSelected] = useState()

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
  const handleNext = () => {
    if (currQues >= 20) {
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
              <h6 className='bg-light p-4 w-50 text-center border rounded'>{questions[currQues].question}</h6>

          </div>

          <div className='p-2 d-flex  justify-content-center align-items-center rounded '>
              <div className='' style={{marginRight:"10px",fontSize:"25px"}}>Time:</div>
              <div  className='text-lg' style={{fontSize:"25px"}}>12:00</div>
          </div>

          <div className=' d-flex  justify-content-around align-items-center rounded '>
    
              {options && options.map((i) => <button className={`bg-white border rounded ${selected && handleSelect(i)}`} key={i} onClick={() => handleCheck(i)} disabled={selected}>{i}</button>)}

              <button onClick={() => handleNext}>{currQues > 20 ? "Submit" : "Next Question"}</button>
              {/* <div className='w-25 text-center mb-4'>
                  <p className='bg-white border rounded'>Option 1</p>
                  <p className='bg-white border rounded'>Option 2</p>
              </div>

              <div className='w-25 text-center'>
                <p className='bg-white border rounded '>Option 1</p>
                <p className='bg-white border rounded'>Option 2</p>
              </div> */}

          </div>

        </div>

        <div className='col-md-4 bg-secondary p-4'>
          <div className='p-4 d-flex justify-content-center align-items-center '>
            <h6 className='bg-light p-4 w-50 text-center border rounded'> Score</h6>

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



// export const QuestionLayout = () => {
//   const navigate=useNavigate()
//   const [quest, setQuest] = useState([])
//   const userInfo = useSelector(state=>state.UserInfo)
//   const {UserDetails} = userInfo

//  const {difficulty}= UserDetails
//  const {questions} = UserDetails 
//  const {selectedTopic} = userInfo

//  const topicId = getTopicId(selectedTopic)

//  const getQuestions = async() => {
//    const { data } = await axios.get(`https://opentdb.com/api.php?amount=${questions}&category=${topicId}&difficulty=${difficulty}&type=multiple`)
//    console.log(data)
//    setQuest(data.results[0].question)
//  }

//  console.log("here is details",selectedTopic)

//  useEffect(()=>{
//    if(!UserDetails.difficulty){
//      navigate("/")
//    }
//    else {
//      getQuestions()
//    }
//  }, [])
//   return (
//     <div className='container'>


//       <div className='row ' style={{marginTop:"12%"}}>
//         <div className='col-md-8 bg-primary'>

//           <div className='p-4 d-flex justify-content-center align-items-center '>
//               <h6 className='bg-light p-4 w-50 text-center border rounded'>{quest}</h6>

//           </div>

//           <div className='p-2 d-flex  justify-content-center align-items-center rounded '>
//               <div className='' style={{marginRight:"10px",fontSize:"25px"}}>Time:</div>
//               <div  className='text-lg' style={{fontSize:"25px"}}>12:00</div>
//           </div>

//           <div className=' d-flex  justify-content-around align-items-center rounded '>
    
//               <div className='w-25 text-center mb-4'>
//                   <p className='bg-white border rounded'>Option 1</p>
//                   <p className='bg-white border rounded'>Option 2</p>
//               </div>

//               <div className='w-25 text-center'>
//                 <p className='bg-white border rounded '>Option 1</p>
//                 <p className='bg-white border rounded'>Option 2</p>
//               </div>

//           </div>

//         </div>

//         <div className='col-md-4 bg-secondary p-4'>
//           <div className='p-4 d-flex justify-content-center align-items-center '>
//             <h6 className='bg-light p-4 w-50 text-center border rounded'> Score</h6>

//           </div>  

//           <div className='d-flex justify-content-center align-items-center'>
//                 <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Level:</h6>
//                 <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{difficulty} </h6>
//           </div>
//           <div className='d-flex justify-content-center align-items-center'>
//               <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}> Topic:</h6>
//               <h6 className=' p-1  text-center ' style={{fontSize:"25px"}}>{selectedTopic} </h6>
//           </div>

//         </div>

//       </div>
//     </div>
//   )
// }
