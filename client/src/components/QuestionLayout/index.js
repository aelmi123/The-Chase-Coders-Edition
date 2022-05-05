import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getTopicId } from "../../actions/EventActions";

import axios from "axios";
export const QuestionLayout = ({
  Questions,
  difficulty,
  UserDetails,
  selectedTopic,
}) => {
  //   console.log("child Questions", Questions);
  const [index, setIndex] = useState(0);
  const [Shuffled, SetShuffled] = useState([]);
  const [score, SetScore] = useState(0);
  const [stopQuiz, SetStopQuiz] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    let Options = [];
    if (Questions && Questions[index] && Questions[index].question) {
      Options.push(
        Questions[index].incorrect_answers[0],
        Questions[index].incorrect_answers[1],
        Questions[index].incorrect_answers[2]
      );
      Options.push(Questions[index].correct_answer);
    }
    console.log(Options);
    SetShuffled(Options);
  }, [index, Questions]);
  console.log("userdetails", UserDetails);
  const optionPressed = (e) => {
    console.log("option selected", e.target.value);
    if (e.target.value === Questions[index].correct_answer) {
      // Correct answer selected
      SetScore(score + 1);
    } else {
      // wrong answer has been selected
    }
    if (index === Questions.length - 1) {
      SetStopQuiz(false);

      const SaveScore = {
        name: UserDetails.name,
        score:
          e.target.value === Questions[index].correct_answer
            ? score + 1
            : score,
      };
      axios.post("http://localhost:3001/scoreGet", SaveScore);
      // navigate("/");
    } else {
      setIndex(index + 1);
    }
  };
  console.log(
    "score = ",
    score,
    "index: ",
    index,
    "Questions Length:",
    Questions.length
  );
  return (
    <>
      <div className="container">
        {" "}
        <div className="row " style={{ marginTop: "12%" }}>
          {" "}
          {stopQuiz ? (
            <div className="col-md-8 bg-primary">
              <div className="p-4 d-flex justify-content-center align-items-center ">
                <h6
                  style={{ color: "Black" }}
                  className="bg-light p-4 w-50 text-center border rounded"
                >
                  {Questions && Questions[index] && Questions[index].question}
                </h6>
              </div>
              <div className=" d-flex  justify-content-around align-items-center rounded ">
                <div className="w-25 text-center mb-4">
                  {Shuffled &&
                    Shuffled[index] &&
                    Shuffled.map((item) => (
                      <button
                        style={{ color: "Black" }}
                        className="option-btn bg-white border rounded"
                        onClick={optionPressed}
                        value={item}
                      >
                        {item}
                      </button>
                    ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="col-md-8 bg-primary">
              <div className="p-4 d-flex justify-content-center align-items-center ">
                <h6
                  style={{ color: "Black" }}
                  className="bg-light p-4 w-50 text-center border rounded"
                >
                  The Quiz Has been Finished You can see your score on left Side
                </h6>
              </div>
              <div className=" d-flex  justify-content-around align-items-center rounded ">
                <div className="w-25 text-center mb-4"></div>
              </div>
            </div>
          )}
          <div className="col-md-4 bg-secondary p-4">
            {" "}
            <div className="p-4 d-flex justify-content-center align-items-center ">
              {" "}
              <h6
                style={{ color: "black" }}
                className="bg-light p-4 w-50 text-center border rounded"
              >
                {" "}
                Score {score}
              </h6>{" "}
            </div>{" "}
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              <h6 className=" p-1  text-center " style={{ fontSize: "25px" }}>
                {" "}
                Level:
              </h6>{" "}
              <h6 className=" p-1  text-center " style={{ fontSize: "25px" }}>
                {difficulty}{" "}
              </h6>{" "}
            </div>{" "}
            <div className="d-flex justify-content-center align-items-center">
              {" "}
              <h6 className=" p-1  text-center " style={{ fontSize: "25px" }}>
                {" "}
                Topic:
              </h6>{" "}
              <h6 className=" p-1  text-center " style={{ fontSize: "25px" }}>
                {selectedTopic}
              </h6>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};

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
