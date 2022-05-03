import React, { useEffect, useState }  from 'react'
import { QuestionLayout } from '../../components/QuestionLayout'

export const Question = ({questions}) => {
  const [options, setOptions] = useState();
    const [currQues, setCurrQues] = useState(0);
  
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
        <QuestionLayout/>
    </div>
  )
}
