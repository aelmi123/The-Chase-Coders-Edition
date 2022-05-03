import React, { useEffect, useState }  from 'react'
import { QuestionLayout } from '../../components/QuestionLayout'
import { GetQuestions } from '../../actions/EventActions';

export const Question = ({}) => {
    const [options, setOptions] = useState();
    const [score, setScore] = useState(0)
    const [currQues, setCurrQues] = useState(0);
    const [questions, setQuestions] = useState(GetQuestions())
  
    useEffect(() => {
      setOptions(
        questions &&
          handleShuffle([
            questions[currQues]?.correct_answer,
            ...questions[currQues]?.incorrect_answers,
          ])
      );
    }, [currQues, questions]);
  
    console.log(questions);
  
    const handleShuffle = (options) => {
      return options.sort(() => Math.random() - 0.5);
    };
  return (
    <div>
        <QuestionLayout currQues={currQues} setCurrQues={setCurrQues} questions={questions} options={options} score={score} setScore={setScore} setQuestions={setQuestions} correct={questions[currQues]?.correct_answer} />
    </div>
  )
}
