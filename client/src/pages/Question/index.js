import React, { useEffect, useState } from "react";
import { QuestionLayout } from "../../components/QuestionLayout";
import { GetQuestions } from "../../actions/EventActions";
import { useSelector } from "react-redux";
import axios from "axios";

export const Question = () => {
  const [Questions, setQuestions] = useState([]);

  const getTopicId = (topic) => {
    switch (topic) {
      case "General Knowledge":
        return 9;
      case "Film":
        return 11;
      case "Music":
        return 12;
      case "Television":
        return 14;
      case "Video Games":
        return 15;
      case "Sports":
        return 21;
      case "Celebrities":
        return 26;
      case "Animals":
        return 27;
      default:
        return "";
    }
  };

  const UserDetails = useSelector((state) => state.UserDetails);
 

  const { difficulty } = UserDetails;
  const { questions } = UserDetails;
  const { selectedTopic } = useSelector((state) => state.selectedTopic);
  console.log(selectedTopic)

  const topicId = getTopicId(selectedTopic);

  useEffect(() => {
    axios
      .get(
        `https://opentdb.com/api.php?amount=${questions}&category=${topicId}&difficulty=${difficulty}&type=multiple`
      )
      .then((response) => {
        console.log("axios", response.data.results);
        setQuestions(response.data.results);
      });
  }, []);
  useEffect(() => {
    console.log("Questions", Questions);
  });
  // const [options, setOptions] = useState();
  // const [score, setScore] = useState(0);
  // const [currQues, setCurrQues] = useState(0);
  // const [questions, setQuestions] = useState(null);
  // const handleShuffle = (options) => {
  //   return options.sort(() => Math.random() - 0.5);
  // };

  // useEffect(() => {
  //   console.log("rquestions", questions);
  // }, [currQues, questions]);

  // console.log(questions);
  // const FucntionData = GetQuestions();
  // FucntionData.then((response) => {
  //   console.log("promise", response);
  //   setQuestions(response);
  // });
  // console.log("rquestions", questions);
  return (
    <div>
      <QuestionLayout
        // currQues={currQues}
        // setCurrQues={setCurrQues}
        Questions={Questions}
        difficulty={difficulty}
        UserDetails={UserDetails}
        selectedTopic={selectedTopic}
        // options={options}
        // score={score}
        // setScore={setScore}
        // setQuestions={setQuestions}
        // correct={questions[currQues]?.correct_answer}
      />
    </div>
  );
};
